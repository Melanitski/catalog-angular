import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'category-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let category of categories">
        <a href="#" [routerLink]="['/categories', category.alias]">
      {{category.name}}
      </a>
    </li>
  </ul>
  `
})
export class CategoryListComponent implements OnInit{
  categories: Category[] = [];

  constructor(private categoryService : CategoryService){ }


  getAll() {
    this.categoryService.getAll()
      .subscribe(response => this.categories = response.json());
  }

  ngOnInit() {
    this.getAll();
  }
  // ngOnInit(){
  //   this.itemService
  //    .getAll()
  //    .subscribe(p => this.items = p)
  // }
}
