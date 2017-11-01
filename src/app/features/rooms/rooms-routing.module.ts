import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddRoomComponent} from './add-room/add-room.component';
import {DailyRatesComponent} from './daily-rates/daily-rates.component';
import {EditRoomComponent} from './edit-room/edit-room.component';
import {ManageRatesComponent} from './manage-rates/manage-rates.component';
import {MaxNightsComponent} from './max-nights/max-nights.component';
import {MinNightsComponent} from './min-nights/min-nights.component';

const routes: Routes = [
  {
    path : 'add-room',
    component : AddRoomComponent,
  }, {
    path : 'daily-rates',
    component : DailyRatesComponent,
  }, {
    path : 'edit-room',
    component : EditRoomComponent,
  }, {
    path : 'manage-rates',
    component : ManageRatesComponent,
  }, {
    path : 'max-night',
    component : MaxNightsComponent,
  }, {
    path : 'min-night',
    component : MinNightsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsRoutingModule { }
