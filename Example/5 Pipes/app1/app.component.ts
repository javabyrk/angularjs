import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'project-app',
    template: `<div class="container-fluid">
      <h1>Student Manager</h1>
      <student-list-view></student-list-view>
    </div>`
})

export class AppComponent{}