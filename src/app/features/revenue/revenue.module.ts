import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RevenueRoutingModule } from './revenue-routing.module';
import { RevenueComponent } from './revenue.component';
import { InventoryComponent } from './inventory/inventory.component';
import { YieldComponent } from './yield/yield.component';

@NgModule({
  imports: [
    CommonModule,
    RevenueRoutingModule,
  ],
  declarations: [RevenueComponent, InventoryComponent, YieldComponent],
})
export class RevenueModule { }
