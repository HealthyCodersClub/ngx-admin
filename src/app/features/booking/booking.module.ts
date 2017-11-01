import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { SubmitBookingComponent } from './submit-booking/submit-booking.component';

@NgModule({
  imports: [
    CommonModule,
    BookingRoutingModule,
  ],
  declarations: [
    BookingComponent,
    ArrivalComponent,
    CancellationComponent,
    ManageBookingComponent,
    SubmitBookingComponent,
  ],
})
export class BookingModule { }
