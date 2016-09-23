import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list.component';
import { ItemDetailsComponent } from './item-details.component';
// Route config let's you map routes to components
const routes: Routes = [
  // map '/items' to the people list component
  {
    path: 'items',
    component: ItemListComponent,
  },

  {
    path: 'items/:id',
    component: ItemDetailsComponent
  },
  // map '/' to '/items' as our default route
  {
    path: '',
    redirectTo: '/items',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
