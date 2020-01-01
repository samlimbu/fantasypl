import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from 'src/app/config/settings';
import { DataAPIMethodAdapter } from 'src/app/models/dataAPI.model';
@Injectable({
  providedIn: 'root'
})
export class GraphService {
  murl = config.mlab_url;
    apikey = config.apikey;
    url = config.url;
  constructor(
    private http: HttpClient,
    private adapter: DataAPIMethodAdapter
) {}

findMethodss(courseId: number, columnName: string, filter = '', sortOrder = '',
        pageNumber, pageSize) {

        // return this.http.get('http://localhost:9000/api/monitoringmethods', {
        //     params: new HttpParams()
        //         .set('methodsId', courseId.toString())
        //         .set('columnName', columnName)
        //         .set('filter', filter)
        //         .set('sortOrder', sortOrder)
        //         .set('pageNumber', pageNumber.toString())
        //         .set('pageSize', pageSize.toString())
        // })
        let sortNum;
            if(sortOrder=='asc'){
                sortNum = 1;
            }
            else if(sortOrder=='desc'){
                sortNum = -1;
            }
            else{
                columnName='natural';
                sortNum=1;
            }

            console.log(this.murl + 'used_monitoring_methods' + this.apikey + '&s={' + columnName + ':' + sortNum + '}'+"&l="+pageSize+"&sk="+pageSize*pageNumber);
        return this.http.get(this.murl + 'used_monitoring_methods' + this.apikey + '&s={' + columnName + ':' + sortNum + '}'+"&l="+pageSize+"&sk="+pageSize*pageNumber )
        .pipe(
            map((data: any[]) => data.map((item: any) => this.adapter.adapt(item))),
        );
    }
  
}
