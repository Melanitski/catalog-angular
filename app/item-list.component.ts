import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let item of items">
        <a href="#" [routerLink]="['/items', item.id]">
      {{item.name}}
      </a>
    </li>
  </ul>
  `
})
export class ItemListComponent implements OnInit{
  items: Item[] = [];

  constructor(private itemService : ItemService){ }

  ngOnInit(){
    this.items = this.itemService.getAll();
  }
}
