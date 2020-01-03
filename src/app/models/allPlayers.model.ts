import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class AllPlayersAdapter implements Adapter<AllPlayers> {
    
    adapt(item: any): AllPlayers {
        return new AllPlayers(
            item.id,
            item.code,
            item.first_name,
            item.second_name,
        );
    }
}

export class AllPlayers {
    constructor(    
        private _id: string,
        private _code: string,
        private _first_name: string,
        private _second_name: string
            ) { } 
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }
    public get first_name(): string {
        return this._first_name;
    }
    public set first_name(value: string) {
        this._first_name = value;
    }
    public get second_name(): string {
        return this._second_name;
    }
    public set second_name(value: string) {
        this._second_name = value;
    }

}

