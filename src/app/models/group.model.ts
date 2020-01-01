import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class GroupAdapter implements Adapter<Group> {
    
    adapt(item: any): Group {
        return new Group(
            item._id.$oid,
            item.name,
            item.icon
        );
    }
}

export class Group {
    constructor(    
        private _id: string,
        private _name: string,
        private _icon: string
    ) { }
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
    public get icon(): string {
        return this._icon;
    }
    public set icon(value: string) {
        this._icon = value;
    }
}

