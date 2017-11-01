import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AvailabilityAnalysisComponent} from './availability-analysis/availability-analysis.component';
import {BookingAnalysisComponent} from './booking-analysis/booking-analysis.component';
import {CustomerAnalysisComponent} from './customer-analysis/customer-analysis.component';
import {CustomerRatingsComponent} from './customer-ratings/customer-ratings.component';
import {SalesAnalysisComponent} from './sales-analysis/sales-analysis.component';

const routes: Routes = [
  {
    path : 'availability',
    component : AvailabilityAnalysisComponent,
  }, {
    path : 'booking',
    component: BookingAnalysisComponent,
  }, {
    path : 'customer-ratings',
    component : CustomerRatingsComponent,
  }, {
    path : 'customer-analysis',
    component : CustomerAnalysisComponent,
  }, {
    path : 'sales',
    component : SalesAnalysisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule { }
