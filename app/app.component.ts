import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>  {{title}} </h1>
  <router-outlet></router-outlet>`,
  // HERE! This registers the PeopleService
  // now Angular 2 knows to inject it when required
  providers: [ItemService]
})
export class AppComponent {
  title: String = 'Catalog';
}
