import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class NotificationSmsSettingsAdapter implements Adapter<NotificationSmsSettings> {
    adapt(item: any): NotificationSmsSettings {
        console.log(item._id.$oid);
        return new NotificationSmsSettings(
            item._id.$oid,
            item.textarea,
            item.label,
            item.status
        );
    }
}

export class NotificationSmsSettings {
    constructor(    
        private _id: string,
        private _textarea: string,
        private _label: string,
        private _status: string
    ) { }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get textarea(): string {
        return this._textarea;
    }
    public set textarea(value: string) {
        this._textarea = value;
    }
    public get label(): string {
        return this._label;
    }
    public set label(value: string) {
        this._label = value;
    }
    public get status(): string {
        return this._status;
    }
    public set status(value: string) {
        this._status = value;
    }
}

