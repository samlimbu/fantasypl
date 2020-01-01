import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import { GlobalErrorHandler } from './global-error-handler.service';
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    constructor(private globalErrorHandler: GlobalErrorHandler){}
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