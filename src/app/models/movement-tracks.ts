import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class MovementTracksAdapter implements Adapter<MovementTracks> {
    adapt(item: any): MovementTracks {
        return new MovementTracks(
            item._id.$oid,
            item.date,
            item.name,
            item.position,
            item.address,
            item.group
        );
    }
}

export class MovementTracks {
    constructor(    
        private _id: string,
        private _date: string,
        private _name: string,
        private _position: string,
        private _address: string,
        private _group: string,
    ) { }
    public get group(): string {
        return this._group;
    }
    public set group(value: string) {
        this._group = value;
    }
    public get address(): string {
        return this._address;
    }
    public set address(value: string) {
        this._address = value;
    }
    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
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
}

