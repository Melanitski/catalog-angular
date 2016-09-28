import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list.component';
import { CategoryDetailsComponent } from './category-details.component';
import { ItemListComponent } from './item-list.component';
import { ItemDetailsComponent } from './item-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/items' to the people list component
  {
    path: ':alias/:page',
    // TODO page 1 don't display in browser URL
    component: ItemsListComponent
  },
  {
    path: 'items/:alias',
    component: ItemDetailsComponent
  },
  {
    path: '',
    // TODO controller for categories load. Redirect to first category
    redirectTo: '/categories',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
