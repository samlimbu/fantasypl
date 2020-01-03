import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../core/auth-guard.service';
import { HomeComponent } from './home-component/home.component';

 
const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'prefix'
    },

    {
        path: '',
        component: HomeComponent,
        children: [
           
             { 
                path: 'dashboard', 
                loadChildren: '../dashboard/dashboard.module#DashboardModule'
             }
            // {
            //     path: 'sms',
            //     canActivate: [AuthGuard],
            //     resolve: { message: ErrorMessageResolver },
            //     loadChildren: '../sms/sms.module#SmsModule'
            // }
    
        ]
        
    }
 
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})
export class HomeRoutingModule {
}
