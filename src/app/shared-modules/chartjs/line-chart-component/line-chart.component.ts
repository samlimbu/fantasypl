import { Component, OnInit, Input } from '@angular/core';
import { LineChartService } from '../chart-js-service/line-chart.service';

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
    constructor(private chartService: LineChartService) { 

    }
    ngOnChanges(changes){
        console.log(changes);
        if(changes.TEMPDATA.currentValue && changes.TEMPDATA.previousValue==undefined){
            console.log('build charrt');
            this.buildChart();
            this.clearArrayData();
        }
        else if(changes.TEMPDATA.currentValue && changes.TEMPDATA.previousValue){
            console.log('update charrt');
            this.updateChartData();
            this.clearArrayData();
        }
    }
    ngOnInit() {
        console.log('ng on init');
        
    }

    ngAfterViewInit() {
        console.log(this.TEMPDATA);
    }
    
    clearArrayData(){
        this.TEMPDATA = [];
        this.columnLabelsDataLIST = [];
        this.xAxisLabels = [];

        this.VIEWDATA=[];
    }
    updateChartData(){
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
            console.log('temparr' + tempArr);
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
            this.columnLabelsDataLIST.push(datasetsObj);
        }



        this.VIEWDATA = {
            labels: this.xAxisLabels,
            datasets: this.columnLabelsDataLIST
        };
        
    }

}
