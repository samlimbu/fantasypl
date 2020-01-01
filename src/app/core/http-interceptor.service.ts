import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import { GlobalErrorHandler } from './global-error-handler.service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler 
     */
    constructor(private globalErrorHandler: GlobalErrorHandler) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .catch(errorResponse => {
                let errMsg: string;
                if (errorResponse instanceof HttpErrorResponse) {
                    const err = errorResponse.message || JSON.stringify(errorResponse.error);
                    errMsg = `${errorResponse.status} - ${errorResponse.statusText || ''} Details: ${err}`;
                } else {
                    errMsg = errorResponse.message ? errorResponse.message : errorResponse.toString();
                }
                console.log(errorResponse.status);
                this.globalErrorHandler.handleError(errorResponse);
                return _throw(errMsg);
            });
    }
}

/**
 * Provider POJO for the interceptor
 */
export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
};


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const sendTokentoURL = ['http://samlimbuheroku.herokuapp.com/users/profile'];
        let isSendToken = false;
        let clonedRequest = req.clone();

        //console.log('req.url', req.url);
       
         
        for (let i = 0; i < sendTokentoURL.length; i++) {
            if (req.url == sendTokentoURL[i]) {
                //only send token to listed URLS
                isSendToken = true;
            }
        }
        if (this.authService.loggedIn() && isSendToken) {

            // Clone the request to add the new header
            clonedRequest = req.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                    Authorization: this.authService.getToken()
                }
            });
        } else {
            clonedRequest = req.clone({
                setHeaders: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                    'Access-Control-Allow-Origin':'*'
                }
            });
        }
        console.log(clonedRequest);
        // Pass the cloned request instead of the original request to the next handle                     
        return next.handle(clonedRequest);
    }
}

export const HeaderInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptor,
    multi: true,
};


