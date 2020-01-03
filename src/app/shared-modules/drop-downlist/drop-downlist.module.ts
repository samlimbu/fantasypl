import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownlistComponent } from './drop-downlist/drop-downlist.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [DropDownlistComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DropDownlistComponent
  ]
})
export class DropDownlistModule { }
