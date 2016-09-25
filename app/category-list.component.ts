import { Component, OnInit } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'category-list',
    templateUrl: 'app/category-list.component.html'
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
}
