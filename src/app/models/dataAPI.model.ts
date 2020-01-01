import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class DataAPIMethodAdapter implements Adapter<DataAPIMethod> {
    
    adapt(item: any): DataAPIMethod {
        return new DataAPIMethod(
            item._id.$oid,
            item.date,
            item.search_requests,
            item.monitored_employees,
            item.tracked_employees
        );
    }
}

export class DataAPIMethod {
    constructor(    
        private _id: string,
        private _date: string,
        private _search_requests: string,
        private _monitored_employees: string,
        private _tracked_employees: string
    ) { } 
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    public get search_requeststest(): string {
        return this._search_requests;
    }
    public set search_requests(value: string) {
        this._search_requests = value;
    }
    public get monitored_employees(): string {
        return this._monitored_employees;
    }
    public set monitored_employees(value: string) {
        this._monitored_employees = value;
    }
    public get tracked_employees(): string {
        return this._tracked_employees;
    }
    public set tracked_employees(value: string) {
        this._tracked_employees = value;
    }
}

