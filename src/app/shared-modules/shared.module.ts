import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule ,
        RouterModule,
        HttpClientModule,
        NgbModule
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        NgbModule
    ]
})
export class SharedModule { }
