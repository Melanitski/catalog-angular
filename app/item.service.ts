import { Injectable } from '@angular/core'
import { Item } from './item';

const ITEMS: Item[] = [
  { id: 1, name: 'iPhone 6', alias: 'iphone6', description: 'Description for iPhone 6', price: 600 },
  { id: 2, name: 'iPhone 7', alias: 'iphone7', description: 'Description for iPhone 6', price: 849 },
  { id: 3, name: 'Galaxy Note 7', alias: 'galaxy_note7', description: 'Description for Galaxy Note 7', price: 750 },
];

@Injectable()
export class ItemService {
  getAll(): Item[] {
    return ITEMS
  }
  get(id: number): Item {
    return ITEMS.find(p => p.id === id);
  }

  save(item: Item){
    let originalItem = ITEMS.find(p => p.id === item.id);
    if (originalItem) Object.assign(originalItem, item);
    // saved muahahaha
  }
  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }
}

}
