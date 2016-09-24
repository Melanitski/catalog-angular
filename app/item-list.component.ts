import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item-list',
  templateUrl: 'app/item-list.component.html'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) { }


  // getAll() {
  //   this.itemService.getAll()
  //     .subscribe(response => this.items = response.json());
  // }
  //
  ngOnInit() {
    // this.getAll();
  }
  // ngOnInit(){
  //   this.itemService
  //    .getAll()
  //    .subscribe(p => this.items = p)
  // }
}
