import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <item-list>`

})
export class AppComponent {
      title: String = 'Catalog';
 }
