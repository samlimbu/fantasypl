import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class TeamsAdapter implements Adapter<Teams> {
    
    adapt(item: any): Teams {
        return new Teams(
            item.id,
            item.code,
            item.short_name,
            item.name
        );
    }
}

export class Teams {
    constructor(    
        private _id: string,
        private _code: string,
        private _search_requests: string,
        private _monitored_employees: string
    ) { } 
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get code(): string {
        return this.code;
    }
    public set code(value: string) {
        this._code = value;
    }
    public get search_requests(): string {
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
}

