import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class GraphService {
  
    private messageSource = new BehaviorSubject(null);
    dataLoadedMessage = this.messageSource .asObservable();
    constructor(
        
    ) { }

    setPlayersLIST(message) {
        this.messageSource.next(message);
    }

    getPlayersLIST(): Observable<any> {
        return this.messageSource.asObservable();
    }

}
