import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'item-details',
  template: `
  <!-- new syntax for ng-if -->
  <section *ngIf="item">
    <h2>You selected:  {{item.name}}  </h2>
    <h3>Description</h3>
    <p>
       {{item.name}}  weights  {{item.weight}} and is  {{item.height}} tall.
    </p>
  </section>
  `
})
export class ItemDetailsComponent {
    @Input() item : Item;
}
