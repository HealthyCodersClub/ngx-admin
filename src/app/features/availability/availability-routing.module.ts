import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LongTermComponent} from './long-term/long-term.component';
import {ShortTermComponent} from './short-term/short-term.component';

const routes: Routes = [
  {
    path : 'long-term',
    component : LongTermComponent,
  }, {
    path : 'short-term',
    component : ShortTermComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvailabilityRoutingModule { }
