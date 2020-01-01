import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class NotificationHistoryAdapter implements Adapter<NotificationHistory> {
    adapt(item: any): NotificationHistory {
        console.log(item._id.$oid);
        return new NotificationHistory(
            item._id.$oid,
            item.date,
            item.time,
            item.recipient,
            item.sms_text
        );
    }
}

export class NotificationHistory {
    constructor(    
        private _id: string,
        private _date: string,
        private _time: string,
        private _recipient: string,
        private _sms_text: string
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
    public get time(): string {
        return this._time;
    }
    public set time(value: string) {
        this._time = value;
    }
    public get recipient(): string {
        return this._recipient;
    }
    public set recipient(value: string) {
        this._recipient = value;
    }
    public get sms_text(): string {
        return this._sms_text;
    }
    public set sms_text(value: string) {
        this._sms_text = value;
    }
    
    

}

