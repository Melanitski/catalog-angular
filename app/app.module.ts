import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CategoryListComponent } from './category-list.component';
import { CategoryService } from './category.service';
import { CategoryDetailsComponent } from './category-details.component';

import { ItemListComponent } from './item-list.component';
import { ItemService } from './item.service';
import { ItemDetailsComponent } from './item-details.component';
import { routing } from './app.routes';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, routing, HttpModule ],
  declarations: [ AppComponent, CategoryListComponent, CategoryDetailsComponent, ItemListComponent, ItemDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ItemService, CategoryService] // You can put your services here!
})
export class AppModule { }
