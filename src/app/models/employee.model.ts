import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";
//https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern
@Injectable({
    providedIn: 'root'
})
export class EmployeeAdapter implements Adapter<Employee> {
  adapt(item: any): Employee {
    return new Employee(
        item._id.$oid,
        item.name,
        item.number,
        item.group,
        item.position,
        item.photoURL
    );
  }
}

export class Employee {
    constructor(
        private _id: string,
        private _name: string,
        private _number: string, 
        private _group: string,
        private _position: string,
        private _photoURL: string
    ){}
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
        this._name = value;
    }
    public get number(): string {
        return this._number;
    }
    public set number(value: string) {
        this._number = value;
    }
    public get group(): string {
        return this._group;
    }
    public set group(value: string) {
        this._group = value;
    }
    public get position(): string {
        return this._position;
    }
    public set position(value: string) {
        this._position = value;
    }
    public get photoURL(): string {
        return this._photoURL;
    }
    public set photoURL(value: string) {
        this._photoURL = value;
    }
}

