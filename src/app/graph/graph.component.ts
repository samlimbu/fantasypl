import { Component, OnInit } from '@angular/core';
import { componentDestroyed } from '../core/takeUntil-function/takeUntil-function';
import { StatisticsService } from '../services/statistics-service/statistics.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
	dateForm: FormGroup;
	EMPLOYEELIST;
	GROUPLIST;
	columnLabels = ['Search Requests2', 'Monitored Employees', 'Tracked Employees'];
	columnLabelsColorLIST = ['orange', 'yellow', 'purple'];

	testData = [
		{ id: "5bbeed32d9126ba2ecf4d356", date1: "2011",  monitored_employees: 10, tracked_employees: 3,test: 4 },
		{ id: "5bbeed32d9126ba2ecf4d356", date1: "2012", a1: 17, monitored_employees: 20, tracked_employees: 40 },
		{ id: "5bbeed32d9126ba2ecf4d356", date1: "2013", a1: 7, monitored_employees: 10, tracked_employees: 1 },
		{ id: "5bbeed32d9126ba2ecf4d356", date1: "2018", a1: 7, monitored_employees: 50, tracked_employees: 1 }
	];
	constructor(
		private statisticsServive: StatisticsService
	) {

	}


	ngOnInit() {
		this.initDate();
		console.log(this.DATA);
		//this.getDataAPIMethods();
	}
	ngAfterContentInit() {
		setTimeout(()=>{
			this.DATA = this.testData;
			},1);
		
	}
	ngOnDestroy() {
	}
	refreshData() {
		this.getDataAPIMethods();

	}
	initDate() {
		this.dateForm = new FormGroup({
			'dateStart': new FormControl(this.minDate, [Validators.required]),
			'dateEnd': new FormControl(this.maxDate, [Validators.required])
		});
	};
	// getGroups() {
	//   console.log('get groups 1');
	//   this.groupService.getGroups()
	//     .takeUntil(componentDestroyed(this)).subscribe(
	//       data => this.GROUPLIST = data,
	//       err => console.log(err),
	//       () => console.log('get groups 2')
	//     );
	// }
	// getEmployees() {
	//   this.employeeService.getEmployees()
	//     .takeUntil(componentDestroyed(this)).subscribe(
	//       data => this.EMPLOYEELIST = data,
	//       err => console.log(err),
	//       () => 'sucess',
	//     );
	// }
	getDataAPIMethods() {
		this.statisticsServive.getMonitoringMethods()
			.takeUntil(componentDestroyed(this))
			.subscribe(
				data => this.DATA = data,
				err => '',
				() => {
					console.log(this.DATA)
				},
			);
	}
	// onGetData(paramId, queryParam) {
	// 	paramId = '5b8629581f6e4f79c1848abc';
	// 	let DATATEMP;
	// 	console.log(this.dateForm.value);
	// 	this.statisticsServive.getNotes()
	// 		//.takeUntil(componentDestroyed(this))
	// 		.subscribe(
	// 			data => {
	// 				console.log(data);
	// 				DATATEMP = data;
	// 			},
	// 			err => console.log(err),
	// 			() => {

	// 			}
	// 		);
	// }
	selectedItem(obj) {
		console.log(obj);
	}
	dataLoadingStatus(status) {
		this.isGetDataLoading = status;
	}

}
