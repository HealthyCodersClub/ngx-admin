import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { BookingAnalysisComponent } from './booking-analysis/booking-analysis.component';
import { CustomerAnalysisComponent } from './customer-analysis/customer-analysis.component';
import { AvailabilityAnalysisComponent } from './availability-analysis/availability-analysis.component';
import { CustomerRatingsComponent } from './customer-ratings/customer-ratings.component';
import { SalesAnalysisComponent } from './sales-analysis/sales-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
  ],
  declarations: [
    ReportsComponent,
    BookingAnalysisComponent,
    CustomerAnalysisComponent,
    AvailabilityAnalysisComponent,
    CustomerRatingsComponent,
    SalesAnalysisComponent,
  ],
})
export class ReportsModule { }
