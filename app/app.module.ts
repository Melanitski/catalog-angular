import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './item-list.component';
import { ItemService } from './item.service';
import { ItemDetailsComponent } from './item-details.component';
import { routing } from './app.routes';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';


@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, ItemListComponent, ItemDetailsComponent ],
  bootstrap: [ AppComponent ],
  providers: [ ItemService] // You can put your services here!
})
export class AppModule { }
