import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationWindowService {

  constructor() { }
  private mapSource = new BehaviorSubject(null);
    messageMap = this.mapSource.asObservable();

    private geoSource = new BehaviorSubject(null);
    messageGeo = this.geoSource.asObservable();

    private radius = new BehaviorSubject(0);

    private color = new BehaviorSubject("");


    private subjectMessage = new Subject<any>();
    private subjectGeo = new Subject<any>();
    
    getMessage(): Observable<any> {
        return this.subjectMessage.asObservable();
    }
    getMessageGeo(): Observable<any> {
        return this.subjectGeo.asObservable();
    }

    setMessage(message) {
        this.subjectMessage.next(message);
    }
 

  
}
