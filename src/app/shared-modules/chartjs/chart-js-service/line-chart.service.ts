import { Injectable } from '@angular/core';
import { ChartBaseService } from './chart-base.service';
import { doesNotThrow } from 'assert';

@Injectable({
    providedIn: 'root'
})
export class LineChartService extends ChartBaseService {
    canvas: any;
    ctx: any;
    chartImage;
    type = 'line';

    options;
    chartMaxValue;
    chartMaxValue1;
    constructor() { super(); }


    buildLinechart(elementId: string, datalabel: any) {
        this.options = {
            type: this.type,
            data: datalabel,
            options: {
                legend: {
                    labels: {
                        boxWidth: 12,
                        fontSize: 11,
                        fontColor: 'white',
                        fontStyle: 'lighter'
                    }
                },
                responsive: false,
                display: true,
                tooltips: {
                    mode: 'nearest',
                    intersect: false,
                    backgroundColor: 'rgba(69,90,99,.82)',
                    borderColor: '#ffffff',
                    borderWidth: 1,
                    titleFontFamily: 'roboto',
                    titleFontColor: 'white',
                    bodyFontFamily: 'roboto',
                    bodySpacing: 3
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 4,
                            fontColor: 'white',
                            maxRotation: 0,
                            minRotation: 0
                        },
                        gridLines: {
                            drawOnChartArea: true,
                            color: "grey"
                        },

                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: 'white',
                            beginAtZero: true,
                            stepSize: 1,
                            callback: (value, index, values) => {

                                // this.chartMaxValue1=100;
                                if (values[0] > Math.ceil(values[0] / 10) * 9) {
                                    this.chartMaxValue1 = Math.ceil(values[0] / 10) * 10;
                                }
                                else {
                                    this.chartMaxValue1 = Math.ceil(values[0] / 10) * 9;
                                }

                                let maxLabel = Math.round(values[0] / 10) * 10;

                                if (value % (maxLabel / 10) == 0) {
                                    return value;
                                }



                            }
                        },
                        gridLines: {
                            drawOnChartArea: true,
                            color: "grey"
                        },

                    }]
                },
                animation: {
                    onComplete: function () {
                        this.chartImage = this.chart.toBase64Image();
                    }
                }
            }
        };

        this.canvas = document.getElementById(elementId);
        this.ctx = this.canvas.getContext('2d');


        this.buildChart(this.ctx, this.options);
    }


    updateLineChartData(datalabel) {
        this.options = {
            type: this.type,
            data: datalabel,
            options: {
                legend: {
                    labels: {
                        fontColor: 'white'
                    }
                },
                responsive: false,
                display: true,

                scales: {
                    xAxes: [{
                        ticks: {
                            autoSkip: true,
                            maxTicksLimit: 5,
                            fontColor: 'white',
                            maxRotation: 2,
                            minRotation: 1
                        },
                        gridLines: {
                            drawOnChartArea: false,
                            color: "#ffffff"
                        },

                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: 'white',
                            beginAtZero: true,
                            stepSize: 1,
                            callback: (value, index, values) => {

                                // this.chartMaxValue1=100;
                                if (values[0] > Math.ceil(values[0] / 10) * 9) {
                                    this.chartMaxValue1 = Math.ceil(values[0] / 10) * 10;
                                }
                                else {
                                    this.chartMaxValue1 = Math.ceil(values[0] / 10) * 9;
                                }

                                let maxLabel = Math.round(values[0] / 10) * 10;

                                if (value % (maxLabel / 10) == 0) {
                                    return value;
                                }



                            }
                        },
                        gridLines: {
                            drawOnChartArea: true,
                            color: "#ffffff"
                        },

                    }]
                }
            }
        };
        console.log('update hcfarm' + this.chartMaxValue1);

        this.updateChartData(this.options.data);


    }
    getChartImage() {
        return this.chartImage;
    }
}
