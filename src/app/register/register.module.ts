import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register-component/register.component';
import { SharedModule } from '../shared-modules/shared.module';
import { DropDownlistModule } from '../shared-modules/drop-downlist/drop-downlist.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    DropDownlistModule
  ]
})
export class RegisterModule { }
