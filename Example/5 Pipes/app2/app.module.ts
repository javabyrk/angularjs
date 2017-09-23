import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { StudentListComponent } from "./student-list.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
