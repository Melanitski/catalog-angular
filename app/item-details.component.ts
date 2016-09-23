import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          this.item = this.itemService.get(id);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoItemsList(){
        let link = ['/items'];
        this.router.navigate(link);
    }

    saveItemDetails(){
      this.itemService.save(this.item);
    }
}
