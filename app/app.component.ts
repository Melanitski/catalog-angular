import { Component } from '@angular/core';
import { ItemService } from './item.service';

@Component({
  selector: 'my-app',
  template: `
  <h1>  {{title}} </h1>
  <item-list></item-list>`,
  // HERE! This registers the PeopleService
  // now Angular 2 knows to inject it when required
  providers: [ItemService]
})
export class AppComponent {
  title: String = 'Catalog';
}
