import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class PlayerAdapter implements Adapter<Player> {
    
    adapt(item: any): Player {
        console.log(item);
        return new Player(
            item.id,
            item.code,
            item.first_name,
            item.second_name,
            item.team_code,
            item.total_points
        );
    }
}

export class Player {
    constructor(    
        private _id: string,
        private _code: string,
        private _first_name: string,
        private _second_name: string,
        private _team_code: string,
        private _total_points: string
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
    public get team_code(): string {
        return this._team_code;
    }
    public set team_code(value: string) {
        this._team_code = value;
    }
    public get total_points(): string {
        return this._total_points;
    }
    public set total_points(value: string) {
        this._total_points = value;
    }
}

