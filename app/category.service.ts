import { Injectable } from '@angular/core'
import { Category } from './category';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CategoryService {

  // TODO extact root URL
  private baseUrl: string = 'http://localhost:3002';

  constructor(private http: Http) {
  }

  getAll() {
   return this.http.get('http://localhost:3002/categories.json');
 }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  get(alias: string){
    return this.http.get('http://localhost:3002/categories/' + alias + '.json');
    // categories#show
    // items#index
    // /categories -> categories#index -> category list
    // /categories/:id -> categories#show -> category info (Not need)
    // /categories/:id/items -> items#index
    // /categories/:category_id/items/:id -> items#show (Not need)
  }
}

function mapCategorys(response:Response): Category[]{
   console.log(response);
   return response.json().map(toCategory)
}

function toCategory(r:any): Category{
  let item = <Category>({
    id: extractId(r), //TODO get from backend response
    name: r.name,
    alias: r.alias,
  });
  console.log('Parsed item:', item);
  return item;
}

function extractId(itemData:any){
 let extractedId = itemData.url.replace('http://localhost:3002/items/','').replace('/','');
 return parseInt(extractedId);
}

function mapCategory(response:Response): Category{
  return toCategory(response.json());
}

function handleError (error: any) {
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  return Observable.throw(errorMsg);
}
