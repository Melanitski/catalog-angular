import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './item-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ItemListComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
