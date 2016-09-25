import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'item-details',
  templateUrl: 'app/item-details.component.html',
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  item: Item;
  sub: any;

  constructor(private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let alias = params['alias'];
      this.itemService.get(alias)
        .subscribe(response => this.item = response.json());
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoItemList(alias: String) {
    let link = ['/category/'+ alias];
    this.router.navigate(link);
  }

  goBack(): void {
  window.history.back();
}
}
