import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { StudentListComponent } from "./student-list.component";

import { StudentDataPipe } from "./student-data.pipe";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent,StudentDataPipe],
    bootstrap: [AppComponent]
})
export class AppModule { }
