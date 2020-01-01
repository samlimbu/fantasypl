import { Injectable } from '@angular/core';
import { config } from '../../config/settings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note, NoteAdapter } from 'src/app/models/note.model';
import { DataAPIMethodAdapter, DataAPIMethod } from 'src/app/models/dataAPI.model';

@Injectable({
    providedIn: 'root'
})
export class StatisticsService {
    murl = config.mlab_url;
    apikey = config.apikey;
    url = config.url;
    table_name = 'control_of_geozones_visits';
    //     murl = 'https://api.mlab.com/api/1/databases/staff/collections/' ;
    //   apikey = '?apiKey=lXutACAwSvbZ_lgydrHKTyJA4duiL-iH';
    //   url = 'http://localhost:70/staff/';

    //http client is latest, http is deprecated
    constructor(
        private http: HttpClient,
        private noteAdapter: NoteAdapter,
        private DataAPIMethodsAdapter: DataAPIMethodAdapter
    ) { }

    // getNotes(): Observable<Note[]> {
    //     const table_name = 'notes';
    //     return this.http.get(this.murl + table_name + this.apikey)
    //         .pipe(
    //             map((data: any[]) => data.map((item: any) => this.noteAdapter.adapt(item))),
    //         );
    // }

    // addStatistics(formvalue): Observable<ControlVisit> {
    //     return this.http.post(this.murl + this.table_name + this.apikey, formvalue)
    //         .pipe(
    //             map((data: any[]) => this.adapter.adapt(data))
    //         );
    // }

    // getControlOfGeozonesVisit(): Observable<ControlVisit[]> {
    //     return this.http.get(this.murl + this.table_name + this.apikey)
    //         .pipe(
    //             map((data: any[]) => data.map((item: any) => this.adapter.adapt(item))),
    //         );
    // }

    // updateStatistics(formvalue, _id): Observable<ControlVisit> {
    //     console.log(this.murl + 'statistics/' + _id + '/' + this.apikey);
    //     //return this.http.put(this.url + 'updateStatistics.php', body);
    //     return this.http.put(this.murl + this.table_name + '/' + _id + '/' + this.apikey, formvalue)
    //         .pipe(
    //             map((data: any[]) => this.adapter.adapt(data))
    //         );
    // }


    // deleteStatisticsbyId(_id): Observable<ControlVisit> {
    //     return this.http.delete(this.murl + this.table_name + '/' + _id + '/' + this.apikey)
    //         .pipe(
    //             map((data: any[]) => this.adapter.adapt(data))
    //         );
    // }

    // getStatisticsById(_id): Observable<ControlVisit[]> {
    //     // const body = JSON.stringify(formvalue);
    //     return this.http.get(this.murl + this.table_name + '/' + _id + '/' + this.apikey)
    //         .pipe(
    //             map((data: any[]) => data.map((item: any) => this.adapter.adapt(item))),
    //         );
    // }



  


    getMonitoringMethods(): Observable<DataAPIMethod[]>  {
        const table_name = 'used_monitoring_methods';
        return this.http.get(this.murl + table_name + this.apikey)
            .pipe(
                map((data: any[]) => data.map((item: any) => this.DataAPIMethodsAdapter.adapt(item))),
            );
        ;
    }

}
