import { Component, OnInit } from '@angular/core';
import { DataAPIService } from './services/dataAPI.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	constructor(private dataAPIService: DataAPIService){}
	ngOnInit(){
		this.dataAPIService.getAllTeams()
			// .subscribe(
			// 	data => console.log(data)
			// 	)
	}
}
