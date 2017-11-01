import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InventoryComponent} from './inventory/inventory.component';
import {YieldComponent} from './yield/yield.component';

const routes: Routes = [
  {
    path : 'inventory',
    component : InventoryComponent,
  }, {
    path : 'yield',
    component : YieldComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenueRoutingModule { }
