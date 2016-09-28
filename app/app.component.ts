import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'my-app',
  // TODO extract to tempalate
  // TODO pug
  template: `
  <h1>  {{title}} </h1>
  <router-outlet></router-outlet>
  `,
  // HERE! This registers the PeopleService
  // now Angular 2 knows to inject it when required
  providers: [CategoryService, ItemService]
})
export class AppComponent {
  title: String = 'Catalog';
}
