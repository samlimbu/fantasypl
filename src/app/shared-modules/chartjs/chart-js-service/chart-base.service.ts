import { Injectable } from '@angular/core';
import { Chart } from "chart.js";

@Injectable({
    providedIn: 'root'
})
export class ChartBaseService {
    chart;

    protected getChart(){
        return this.chart;
    }
    
    protected buildChart(ctx: any, options: any) {
        this.chart = new Chart(ctx, options);
    }

    protected updateChartMaxValue(maxYvalue) {

    }

    protected updateChartData(datalabel) {
        let xAxisLIST = datalabel.labels;
        let chartxAxisLIST = this.chart.data.labels;

        let labelDataSetsLIST = datalabel.datasets;
        let chartDataSetsLIST = this.chart.data.datasets;

        let diff = xAxisLIST.length - chartxAxisLIST.length;

        if (diff < 0) {
            for (let i = 0; i < Math.abs(diff); i++){
                chartxAxisLIST.pop();
                for (let i = 0; i < chartDataSetsLIST.length; i++) {
                    chartDataSetsLIST[i].data.pop();
                }
            }
        }

        for (let i = 0; i < labelDataSetsLIST.length; i++) {
            for (let j = 0; j < labelDataSetsLIST[i].data.length; j++) {
                chartDataSetsLIST[i].data[j] = labelDataSetsLIST[i].data[j];
                chartxAxisLIST[j] = xAxisLIST[j];
            }
        }



        this.chart.update();
    }


}
