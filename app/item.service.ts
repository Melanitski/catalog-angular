import { Injectable } from '@angular/core'
import { Item } from './item';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const ITEMS: Item[] = [
  { id: 1, name: 'iPhone 6', alias: 'iphone6', description: 'Description for iPhone 6', price: 600 },
  { id: 2, name: 'iPhone 7', alias: 'iphone7', description: 'Description for iPhone 6', price: 849 },
  { id: 3, name: 'Galaxy Note 7', alias: 'galaxy_note7', description: 'Description for Galaxy Note 7', price: 750 },
];

@Injectable()
export class ItemService {
  private baseUrl: string = 'http://localhost:3002';

  constructor(private http: Http) {
  }
  // getAll(): Observable<Item[]> {
  //   let items$ = this.http
  //     .get(`${this.baseUrl}/items.json`, { headers: this.getHeaders() })
  //     .map(mapItems);
  //   return items$;
  // }

  getAll(alias: string) {
   return this.http.get('http://localhost:3002/categories/' + alias + '/items.json');
 }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  // get(id: number): Observable<Item> {
  //   let item$ = this.http
  //     .get(`${this.baseUrl}/items/${id}`, {headers: this.getHeaders()})
  //     .map(mapItem);
  //     return item$;
  // }
  get(alias: string){
    return this.http.get('http://localhost:3002/items/' + alias + '.json');
  }

}


function mapItems(response:Response): Item[]{
   // The response of the API has a results
   // property with the actual results
   console.log(response);
   return response.json().map(toItem)
}

function toItem(r:any): Item{
  let item = <Item>({
    id: extractId(r),
    name: r.name,
    price: r.price,
    alias: r.alias,
    description: r.description,
  });
  console.log('Parsed item:', item);
  return item;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(itemData:any){
 let extractedId = itemData.url.replace('http://localhost:3002/items/','').replace('/','');
 return parseInt(extractedId);
}

function mapItem(response:Response): Item{
  // toPerson looks just like in the previous example
  return toItem(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
