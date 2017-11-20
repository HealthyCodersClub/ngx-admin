import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { SubmitBookingComponent } from './submit-booking/submit-booking.component';
import { BookingService } from './booking.service';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    BookingRoutingModule,
    SharedModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    BookingComponent,
    ArrivalComponent,
    CancellationComponent,
    ManageBookingComponent,
    SubmitBookingComponent,
  ],
  providers: [BookingService],
})
export class BookingModule { }
