import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class StatisticsStaffMovementAdapter implements Adapter<StatisticsStaffMovement> {
    
    adapt(item: any): StatisticsStaffMovement {
        return new StatisticsStaffMovement(
            item._id.$oid,
            item.date,
            item.name,
            item.number,
            item.position,
            item.email,
            item.address,
            item.status,
            item.group,
            item.event
        );
    }
}

export class StatisticsStaffMovement {
    constructor(    
        private _id: string,
        private _date: string,
        private _name: string,
        private _number: string,
        private _position: string,
        private _email: string,
        private _address: string,
        private _status: string,
        private _group: string,
        private _event: string
    ) { }
    public get event(): string {
        return this._event;
    }
    public set event(value: string) {
        this._event = value;
    }
    public get group(): string {
        return this._group;
    }
    public set group(value: string) {
        this._group = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }
    public get number(): string {
        return this._number;
    }
    public set number(value: string) {
        this._number = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value + 'ee';
    }
}

