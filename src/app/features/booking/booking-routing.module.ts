import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ArrivalComponent} from './arrival/arrival.component';
import {CancellationComponent} from './cancellation/cancellation.component';
import {ManageBookingComponent} from './manage-booking/manage-booking.component';
import {SubmitBookingComponent} from './submit-booking/submit-booking.component';

const routes: Routes = [
  {
    path : 'arrival',
    component : ArrivalComponent,
  }, {
    path : 'cancellation',
    component: CancellationComponent,
  }, {
    path : 'manage-booking',
    component : ManageBookingComponent,
  }, {
    path : 'submit-booking',
    component : SubmitBookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule { }
