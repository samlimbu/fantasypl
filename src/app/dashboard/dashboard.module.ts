import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { GraphComponent } from '../graph/graph.component';
import { ChartjsModule } from '../shared-modules/chartjs/chartjs.module';
import { SharedModule } from '../shared-modules/shared.module';
import { DropDownlistModule } from '../shared-modules/drop-downlist/drop-downlist.module';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartjsModule,
    SharedModule,
    DropDownlistModule
  ]
})
export class DashboardModule { }
