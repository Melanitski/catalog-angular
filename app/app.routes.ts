import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list.component';
import { CategoryDetailsComponent } from './category-details.component';
import { ItemListComponent } from './item-list.component';
import { ItemDetailsComponent } from './item-details.component';
// Route config let's you map routes to components
const routes: Routes = [
  // map '/items' to the people list component
  {
    path: 'categories',
    component: CategoryListComponent,
  },
  {
    path: 'categories/:alias',
    component: CategoryDetailsComponent
  },
  {
    path: 'categories/:alias/items',
    component: ItemListComponent,
  },
  {
    path: 'items/:alias',
    component: ItemDetailsComponent
  },
  // map '/' to '/items' as our default route
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
