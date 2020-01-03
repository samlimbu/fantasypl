import { Component, OnInit, Input } from '@angular/core';
import { componentDestroyed } from '../core/takeUntil-function/takeUntil-function';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GraphService } from './graph-service/graph.service';
import { takeUntil } from 'rxjs/operators';
import { DataAPIService } from '../services/dataAPI.service';

@Component({
	selector: 'app-graph',
	templateUrl: './graph.component.html',
	styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
	fileUrl;
	isLoaded: boolean;
	currentParamId;
	currentQueryParam;
	isGetDataLoading = true;
	minDate = new Date("2018, 9, 25");
	maxDate = new Date("2018, 12, 25");
	DATA;
	isChangeDetection = false;
	dateForm: FormGroup;
	EMPLOYEELIST;
	GROUPLIST;
	//	columnLabels = ['one', 'playertwo', 'three', 'four'];
	//	columnLabelsColorLIST = ['orange', 'yellow', 'red', 'green'];
	columnLabels = ['Search Requests', 'Monitored Employees', 'Tracked Employees'];
	columnLabelsColorLIST = ['orange', 'yellow', 'purple'];
	testData = [{element: 14, round: 1, total_points: 7},
		{element: 14, round: 2, totalpoints: 3},
		{element: 14, round: 3, totalpoints: 1},
		{element: 14, round: 4, totalpoints: 3},
		{element: 14, round: 5, totalpoints: 2},
		{element: 14, round: 6, totalpoints: 2},
		{element: 14, round: 7, totalpoints: 3},
		{element: 14, round: 8, totalpoints: 6},
		{element: 14, round: 9, totalpoints: 2},
		{element: 14, round: 10, totalpoints: 1},
		{element: 14, round: 11, totalpoints: 4},
		{element: 14, round: 12, totalpoints: 2},
		{element: 14, round: 13, totalpoints: 9},
		{element: 14, round: 14, totalpoints: 3},
		{element: 14, round: 15, totalpoints: 3},
		{element: 14, round: 16, totalpoints: 3},
		{element: 14, round: 17, totalpoints: 2},
		{element: 14, round: 18, totalpoints: 6},
		{element: 14, round: 19, totalpoints: 3},
		{element: 14, round: 20, totalpoints: 1},
		{element: 14, round: 21, totalpoints: 9}]
	testData2 = [
		{element: 14, round: 1, totalpoints: 7, t3: 10},
		{element: 14, round: 2, totalpoints: 3, t3: 10},
		{element: 14, round: 3, totalpoints: 1, t3: 10},
		{element: 14, round: 4, totalpoints: 3, t3: 10},
		{element: 14, round: 5, totalpoints: 2, t3: 10},
		{element: 14, round: 6, totalpoints: 2, t3: 10},
		{element: 14, round: 7, totalpoints: 3, t3: 10},
		{element: 14, round: 8, totalpoints: 6, t3: 10},
		{element: 14, round: 9, totalpoints: 2, t3: 10},
		{element: 14, round: 10, totalpoints: 1, t3: 10},
		{element: 14, round: 11, totalpoints: 4, t3: 10},
		{element: 14, round: 12, totalpoints: 2, t3: 10},
		{element: 14, round: 13, totalpoints: 9, t3: 10},
		{element: 14, round: 14, totalpoints: 3, t3: 10},
		{element: 14, round: 15, totalpoints: 3, t3: 10},
		{element: 14, round: 16, totalpoints: 3, t3: 10},
		{element: 14, round: 17, totalpoints: 2, t3: 10},
		{element: 14, round: 18, totalpoints: 6, t3: 10},
		{element: 14, round: 19, totalpoints: 3, t3: 10},
		{element: 14, round: 20, totalpoints: 1, t3: 10},
		{element: 14, round: 21, totalpoints: 9, t3: 15},
		]

	constructor(
		private dataService: DataAPIService,
		private graphService: GraphService
	) {
	}

	ngOnChanges(changes) {
		console.log(changes);
		if (changes.DATA.currentValue && changes.DATA.previousValue == undefined) {
			console.log(changes.DATA.currentValue)
		}
		else if (changes.DATA.currentValue && changes.DATA.previousValue) {
			console.log(changes.DATA.currentValue)
		}
	}

	ngOnInit() {
		this.subscribeToPlayersList();
		setTimeout(()=>{
			//this.DATA = this.testData;
			
		},10)
		// setTimeout(()=>{
			
		// 	this.DATA = this.testData2;
		// },4000)
		//this.getPlayerHistory(1);
	}
	ngOnDestroy() {
	}

	subscribeToPlayersList() {
		this.graphService.getPlayersLIST()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe(
				data => {
					
					//console.log(data);
					if(data)
					this.getPlayerHistory(data)
				}
			)

	}
	ngAfterContentInit() {
		setTimeout(() => {
			//this.DATA = this.testData;
		}, 2);

	}

	refreshData() {

	}
	initDate() {
		this.dateForm = new FormGroup({
			'dateStart': new FormControl(this.minDate, [Validators.required]),
			'dateEnd': new FormControl(this.maxDate, [Validators.required])
		});
	};

	getPlayerHistory(e) {
		this.dataService.getPlayerHistory(e.id)
		  .pipe(takeUntil(componentDestroyed(this)))
		  .subscribe(
			data => [this.DATA = data, this.columnLabels = e.second_name]
		  )
	}
	selectedItem(obj) {
		console.log(obj);
	}
	dataLoadingStatus(status) {
		this.isGetDataLoading = status;
	}
	onButton(){
		this.DATA = this.testData2;
	}
}
