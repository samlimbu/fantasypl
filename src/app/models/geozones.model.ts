import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class GeozonesAdapter implements Adapter<Geozones> {
    adapt(item: any): Geozones {
        return new Geozones(
            item._id.$oid,
            item.geozoneName,
            item.address,
            item.radius,
            item.latitude,
            item.longitude,
            item.frequency,
            item.color
        );
    }
}

export class Geozones {
    constructor(    
        private _id: string,
        private _geozoneName: string,
        private _address: string,
        private _radius: string,
        private _latitude: string,
        public longitude: string,
        private _frequency: string,
        private _color: string
    ) { }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }
    public get frequency(): string {
        return this._frequency;
    }
    public set frequency(value: string) {
        this._frequency = value;
    }
    public get latitude(): string {
        return this._latitude;
    }
    public set latitude(value: string) {
        this._latitude = value;
    }
    public get radius(): string {
        return this._radius;
    }
    public set radius(value: string) {
        this._radius = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get geozoneName(): string {
        return this._geozoneName;
    }
    public set geozoneName(value: string) {
        this._geozoneName = value;
    }
}

