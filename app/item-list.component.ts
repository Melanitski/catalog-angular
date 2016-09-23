import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

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
export class ItemListComponent {
  items: Item[] = [];
  constructor(private _itemService : ItemService){ }
  ngOnInit(){
    this.items = this._itemService.getAll();
  }
}
