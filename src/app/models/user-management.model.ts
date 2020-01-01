import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class UserManagementAdapter implements Adapter<UserManagement> {
    
    adapt(item: any): UserManagement {
        return new UserManagement(
            item._id.$oid,
            item.username,
            item.phone,
            item.user_type,
            item.date
        );
    }
}

export class UserManagement {
    constructor(    
        private _id: string,
        private _username: string,
        private _phone: number,
        private _user_type: string,
        private _date: string

    ) { }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get username(): string {
        return this._username;
    }
    public set username(value: string) {
        this._username = value;
    }
    public get phone(): number {
        return this._phone;
    }
    public set phone(value: number) {
        this._phone = value;
    }
    public get user_type(): string {
        return this._user_type;
    }
    public set user_type(value: string) {
        this._user_type = value;
    }
    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }   
}

