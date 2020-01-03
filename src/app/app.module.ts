import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { AuthGuardService } from './core/auth-guard.service';
import { HeaderInterceptorProvider, ErrorInterceptorProvider } from './core/http-interceptor.service';
import { GlobalErrorHandler } from './core/global-error-handler.service';
import { AppConfigService } from './services/AppConfig.service';

const appInitializerFn = (appConfig: AppConfigService) => {
  return () => {
      return appConfig.loadAppConfig();
  }
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    HeaderInterceptorProvider,
    ErrorInterceptorProvider,
    GlobalErrorHandler,
    AuthGuardService,
    AppConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: appInitializerFn,
            multi: true,
            deps: [AppConfigService]
        },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
