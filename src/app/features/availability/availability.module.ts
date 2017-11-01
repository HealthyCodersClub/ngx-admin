import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvailabilityRoutingModule } from './availability-routing.module';
import { AvailabilityComponent } from './availability.component';
import { ShortTermComponent } from './short-term/short-term.component';
import { LongTermComponent } from './long-term/long-term.component';

@NgModule({
  imports: [
    CommonModule,
    AvailabilityRoutingModule,
  ],
  declarations: [AvailabilityComponent, ShortTermComponent, LongTermComponent],
})
export class AvailabilityModule {

}
