import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { ManageRatesComponent } from './manage-rates/manage-rates.component';
import { DailyRatesComponent } from './daily-rates/daily-rates.component';
import { MinNightsComponent } from './min-nights/min-nights.component';
import { MaxNightsComponent } from './max-nights/max-nights.component';
import { RoomsService } from './rooms.service';

@NgModule({
  imports: [
    CommonModule,
    RoomsRoutingModule,
  ],
  declarations: [
    RoomsComponent,
    AddRoomComponent,
    EditRoomComponent,
    ManageRatesComponent,
    DailyRatesComponent,
    MinNightsComponent,
    MaxNightsComponent,
  ],
  providers: [RoomsService],
})
export class RoomsModule { }
