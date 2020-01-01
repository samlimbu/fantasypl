import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart-component/line-chart.component';
import { LineChartService } from './chart-js-service/line-chart.service';
import { ChartBaseService } from './chart-js-service/chart-base.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LineChartComponent],
  providers:[LineChartService, ChartBaseService],
  exports:[LineChartComponent]
})
export class ChartjsModule { }
