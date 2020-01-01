import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class GeneralInfoAdapter implements Adapter<GeneralInfo> {
  adapt(item: any): GeneralInfo {
    return new GeneralInfo(
        item._id.$oid,
        item.name,
        item.number,
        item.email,
        item.latitude,
        item.longitude,
        item.start,
        item.end
    );
  }
}

export class GeneralInfo{
    constructor(
        private _id: string,
        private _name: string,
        private _number: number,
        private _email: string,
        private _latitude: number,
        private _longitude: number,
        private _start: string,
        private _end: string
    ){}
    public get end(): string {
        return this._end;
    }
    public set end(value: string) {
        this._end = value;
    }
    public get start(): string {
        return this._start;
    }
    public set start(value: string) {
        this._start = value;
    }
    public get longitude(): number {
        return this._longitude;
    }
    public set longitude(value: number) {
        this._longitude = value;
    }
    public get latitude(): number {
        return this._latitude;
    }
    public set latitude(value: number) {
        this._latitude = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get number(): number {
        return this._number;
    }
    public set number(value: number) {
        this._number = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}

