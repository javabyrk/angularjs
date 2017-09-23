import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { StudentListComponent } from "./student-list.component";

import {ContentFilterPipe} from "./content-filter.pipe";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent,ContentFilterPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
