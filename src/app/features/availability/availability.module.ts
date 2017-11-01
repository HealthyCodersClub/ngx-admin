import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityRoutingModule } from './availability-routing.module';
import { AvailabilityComponent } from './availability.component';

@NgModule({
  imports: [
    CommonModule,
    AvailabilityRoutingModule,
  ],
  declarations: [AvailabilityComponent],
})
export class AvailabilityModule {

}
