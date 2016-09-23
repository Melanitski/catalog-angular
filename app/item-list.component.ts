import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let item of items" (click)="selectItem(item)">
        {{item.name}}
    </li>
  </ul>
  <item-details [item]="selectedItem"></item-details>
  `
})
export class ItemListComponent {
  items: Item[] = [];
  selectedItem: Item;
  constructor(private _itemService: ItemService) { }
  ngOnInit() {
    this.items = this._itemService.getAll();
  }
  selectItem(item: Item) {
    this.selectedItem = item;
  }
}
