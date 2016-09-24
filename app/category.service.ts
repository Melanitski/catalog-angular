import { Injectable } from '@angular/core'
import { Category } from './category';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CategoryService {
  private baseUrl: string = 'http://localhost:3002';

  constructor(private http: Http) {
  }
  // getAll(): Observable<Category[]> {
  //   let items$ = this.http
  //     .get(`${this.baseUrl}/items.json`, { headers: this.getHeaders() })
  //     .map(mapCategorys);
  //   return items$;
  // }

  getAll() {
   return this.http.get('http://localhost:3002/categories.json');
 }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
  // get(id: number): Observable<Category> {
  //   let item$ = this.http
  //     .get(`${this.baseUrl}/items/${id}`, {headers: this.getHeaders()})
  //     .map(mapCategory);
  //     return item$;
  // }
  get(alias: string){
    return this.http.get('http://localhost:3002/categories/' + alias + '.json');
  }

}


function mapCategorys(response:Response): Category[]{
   // The response of the API has a results
   // property with the actual results
   console.log(response);
   return response.json().map(toCategory)
}

function toCategory(r:any): Category{
  let item = <Category>({
    id: extractId(r),
    name: r.name,
    alias: r.alias,
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

function mapCategory(response:Response): Category{
  // toPerson looks just like in the previous example
  return toCategory(response.json());
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
