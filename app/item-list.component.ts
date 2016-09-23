import { Component } from '@angular/core';
import { Item } from './item';


@Component({
  selector: 'item-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let item of items">
     {{item.name}}
    </li>
  </ul>
  `
})

export class ItemListComponent{
  items: Item[] = [
    {name: 'iPhone 6', description: 'Description for iPhone 6', price: 600},
    {name: 'iPhone 7', description: 'Description for iPhone 6', price: 849},
    {name: 'Galaxy Note 7', description: 'Description for Galaxy Note 7', price: 750},
  ];

}
