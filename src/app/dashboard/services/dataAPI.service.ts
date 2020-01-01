import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { config } from 'src/app/config/settings';
import { DataAPIMethodAdapter } from 'src/app/models/dataAPI.model';

@Injectable({
    providedIn: 'root'
})
export class DataAPIService {
    murl = config.mlab_url;
    apikey = config.apikey;
    url = config.url;
    constructor(
        private http: HttpClient,
        private adapter: DataAPIMethodAdapter
    ) {

    }
    findAllCourseMethodss(methodId: number) {
        return this.http.get('http://localhost:9000/api/monitoringmethods', {
            params: new HttpParams()
                .set('methodsId', methodId.toString())
                .set('pageNumber', "0")
                .set('pageSize', "1000")
        })
        // .pipe(
        //     map(res =>  res["payload"])
        // );
    }
    getAllTeams(){
        return this.http.jsonp('https://fantasy.premierleague.com/api/bootstrap-static/', 'test callback')
        .pipe(
          ).subscribe(data => {
            console.log(data);
          });
    }

}
