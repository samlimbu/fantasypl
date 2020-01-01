import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartjsModule } from './shared-modules/chartjs/chartjs.module';
import { AuthGuardService } from './core/auth-guard.service';
import { GraphComponent } from './graph/graph.component';
import { HeaderInterceptorProvider } from './core/http-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ChartjsModule
  ],
  providers: [
    AuthGuardService,
    HeaderInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
