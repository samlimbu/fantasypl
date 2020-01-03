import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class HistoryAdapter implements Adapter<History> { 
    adapt(item: any): History {
        return new History(
            item.element,
            item.round,
           // item.opponent_team,
            item.total_points,
          //  item.kickoff_time,
//item.value
        );
    }
}

export class History {
    constructor(    
        private _element: string,
        private _round: string,
      //  private _opponent_team: string,
        private _total_points: string,
     //   private _kickoff_time: string,
      //  private _value: string
    ) { } 
    public get element(): string {
        return this._element;
    }
    public set element(value: string) {
        this._element = value;
    }
    public get round(): string {
        return this._round;
    }
    public set round(value: string) {
        this._round = value;
    }
    // public get oppponent_team(): string {
    //     return this._opponent_team;
    // }
    // public set oppponent_team(value: string) {
    //     this._opponent_team = value;
    // }
    public get total_points(): string {
        return this._total_points;
    }
    public set total_points(value: string) {
        this._total_points = value;
    }
    // public get kickoff_time(): string {
    //     return this._kickoff_time;
    // }
    // public set kickoff_time(value: string) {
    //     this._kickoff_time = value;
    // }
    // public get value(): string {
    //     return this._value;
    // }
    // public set value(value: string) {
    //     this._value = value;
    // }
}

