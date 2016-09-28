import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Category } from './category';
import { CategoryService } from './category.service';
import { Item } from './item';
import { ItemService } from './item.service';


@Component({
  selector: 'category-details',
  templateUrl: 'app/category-details.component.html',
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {
  category: Category;
  items: Item[];
  sub: any; // TODO make clear unsubscribe. Remove memory leak

  constructor(private categoryService: CategoryService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      if (params['alias']) {
        let alias = params['alias'];
        this.categoryService.get(alias)
          .subscribe(response => this.category = response.json());
      }
    });
    this.sub = this.route.params.subscribe(params => {
      if (params['alias']) {
        let id = params['alias'];
        this.itemService.getAll(id)
          .subscribe(response => this.items = response.json());
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
