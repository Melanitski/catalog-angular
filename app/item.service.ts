import { Injectable } from '@angular/core'
import { Item } from './item';


@Injectable()
export class ItemService {
  getAll() : Item[] {
    return [
    {name: 'iPhone 6', description: 'Description for iPhone 6', price: 600},
    {name: 'iPhone 7', description: 'Description for iPhone 6', price: 849},
    {name: 'Galaxy Note 7', description: 'Description for Galaxy Note 7', price: 750},
    ];
  }


}
