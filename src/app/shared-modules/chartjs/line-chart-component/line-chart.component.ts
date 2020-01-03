import { Component, OnInit, Input, IterableDiffers } from '@angular/core';
import { LineChartService } from '../chart-js-service/line-chart.service';
import { GraphService } from 'src/app/graph/graph-service/graph.service';
import { takeUntil } from 'rxjs/operators';
import { componentDestroyed } from 'src/app/core/takeUntil-function/takeUntil-function';
import { formatNumber } from '@angular/common';

@Component({
    selector: 'line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    @Input() elementId;
    @Input() TEMPDATA;
    @Input() height;
    @Input() width;
    @Input() columnLabels;
    @Input() columnLabelsColorLIST;


    VIEWDATA;
    xAxisLabels = new Array();
    columnLabelsDataLIST = new Array();

    constructor(
        private chartService: LineChartService,
        private graphService: GraphService
    ) {

    }
    ngOnChanges(changes) {
        console.log(changes);
        if (changes.TEMPDATA && changes.TEMPDATA.currentValue && changes.TEMPDATA.previousValue == undefined) {
            setInterval(() => {
                //console.log(this.TEMPDATA);
            }, 4000);
            console.log('build charrt');
            console.log(this.TEMPDATA);

            this.buildChart();
            //this.clearArrayData();


            // this.clearArrayData();
        }
        else if (changes.TEMPDATA && changes.TEMPDATA.currentValue && changes.TEMPDATA.previousValue) {
            console.log('update charrt');
            this.updateChartData();
            //this.clearArrayData();
        }



        // this.clearArrayData();

    }
    ngOnInit() {
        console.log('ng on init');
        //this.subscribeToPlayersList();
    }

    ngAfterViewInit() {
        console.log(this.TEMPDATA);
    }
    ngOnDestroy() { }


    clearArrayData() {
        this.TEMPDATA = [];
        this.columnLabelsDataLIST = [];
        this.xAxisLabels = [];
        this.VIEWDATA = [];
    }
    updateChartData() {
        console.log('updateCHartData');
        this.transformData();
        this.chartService.updateLineChartData(this.VIEWDATA);
    }

    buildChart() {
        this.transformData();
        this.chartService.buildLinechart(this.elementId, this.VIEWDATA);

    }
    styleObject() {
        return { height: this.height + 'px', width: this.width + 'px' };
    }
    

    transformData() {
        console.log('transform data', this.TEMPDATA);
        console.log('transform data', this.TEMPDATA[0]);
        let xAxisLIST = [];
        let yAxisLIST = [];
        let legendLIST = [];
        this.TEMPDATA.forEach((item) => {
            console.log(item);
            xAxisLIST.push('GW ' + item.round);
            yAxisLIST.push(item.total_points);
        })
        console.log(yAxisLIST);
        //let datasetsObj = this.getDataSetsObj([21,4,1,2,4,5,1]);
        //data points is pushed in every loop 
        this.columnLabelsDataLIST.push(this.getDataSetsObj(yAxisLIST,this.generateHslaColors(100,50,1.0,15)[Math.floor(Math.random() * 15) + 1  ])); //inside i loop
        //outside loop
        this.VIEWDATA = {
            labels: xAxisLIST,
            datasets: this.columnLabelsDataLIST
        };
    }


    getDataSetsObj(LIST,color) {
        return {
            label: this.columnLabels,
            borderColor: color,
            pointBorderColor: color,
            pointHoverRadius: 6,
            fill: false,
            lineTension: 0.3,
            backgroundColor: [
                color
            ],
            data: LIST,
        }
    }

    generateHslaColors(saturation=100, lightness=50, alpha, amount = 15) {
        let colors = []
        let huedelta = Math.trunc(360 / amount)
        for (let i = 0; i < amount; i++) {
            let hue = i * huedelta
            colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
        }
        return colors
    }

    transformData11() {
        console.log('transform data');
        let beginKey = 1;
        let KEYS = Object.keys(this.TEMPDATA[0]);
        let key1: string = KEYS[beginKey];
        for (let i = 0; i < this.TEMPDATA.length; i++) {
            //console.log(this.TEMPDATA[i][key1]);
            this.xAxisLabels.push(this.TEMPDATA[i][key1])
        }
        for (let i = beginKey + 1; i < KEYS.length; i++) {
            let keytemp: string = KEYS[i];
            let tempArr = new Array();
            for (let j = 0; j < this.TEMPDATA.length; j++) {

                tempArr.push(this.TEMPDATA[j][keytemp]);

            }

            let datasetsObj = {
                label: this.columnLabels[i - beginKey - 1],
                borderColor: this.columnLabelsColorLIST[i - beginKey - 1],
                pointBorderColor: this.columnLabelsColorLIST[i - beginKey - 1],
                pointBackgroundColor: this.columnLabelsColorLIST[i - beginKey - 1],
                pointHoverBackgroundColor: this.columnLabelsColorLIST[i - beginKey - 1],
                // pointHoverBorderColor: 'white',
                // pointBorderWidth: 0,
                pointHoverRadius: 6,
                // pointHoverBorderWidth: 1,
                //pointRadius: 4,
                fill: false,
                //borderWidth: 1,

                //radius: 3,
                lineTension: 0.3,
                backgroundColor: [

                    this.columnLabelsColorLIST[i - beginKey - 1]
                ],
                data: tempArr,

            }
            //data points is pushed in every loop 
            console.log('temparr' + tempArr);

            this.columnLabelsDataLIST.push(datasetsObj);
        }
        console.log('this.temp');
        console.log(this.TEMPDATA)


        this.VIEWDATA = {
            labels: this.xAxisLabels,
            datasets: this.columnLabelsDataLIST
        };
        console.log('viwedata');
        console.log(this.VIEWDATA);
    }

}
