import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

@Injectable({
    providedIn: 'root'
})
export class NoteAdapter implements Adapter<Note> {
    
    adapt(item: any): Note {
        return new Note(
            item._id.$oid,
            item.timestamp,
            item.employee_name,
            item.number,
            item.position,
            item.message,
            item.text
        );
    }
}

export class Note {
    constructor(    
        private _id: string,
        private _timestamp: string,
        private _employee_name: string,
        private _number: number,
        private _position: string,
        private _message: number,
        private _text: string
    ) { }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get timestamp(): string {
        return this._timestamp;
    }
    public set timestamp(value: string) {
        this._timestamp = value;
    }
    public get employee_name(): string {
        return this._employee_name;
    }
    public set employee_name(value: string) {
        this._employee_name = value;
    }
    public get number(): number {
        return this._number;
    }
    public set number(value: number) {
        this._number = value;
    }
    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }
    public get message(): number {
        return this._message;
    }
    public set message(value: number) {
        this._message = value;
    }
    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }
    

}

