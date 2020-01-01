import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";
@Injectable({
    providedIn: 'root'
})
export class ControlVisitAdapter implements Adapter<ControlVisit> {
    adapt(item: any): ControlVisit {
        return new ControlVisit(
            item._id.$oid,
            item.geozone_name,
            item.event,
            item.timestamp,
            item.employee_name
        );
    }
}

export class ControlVisit {
    constructor(    
        private _id: string,
        private _geozone_name: string,
        private _event: string,
        private _timestamp: string,
        private _employee_name: string
    ) { }
    //accessor properties
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get geozone_name(): string {
        return this._geozone_name;
    }
    public set geozone_name(value: string) {
        this._geozone_name = value;
    }
    public get event(): string {
        return this._event;
    }
    public set event(value: string) {
        this._event = value;
    }
    public get timestamp(): string {
        return this._timestamp;
    }
    public set timestamp(value: string) {
        this._timestamp = value;
    }
    public get employee_name(): string {
        return this._employee_name;
    }
    public set employee_name(value: string) {
        this._employee_name = value;
    }
}

