import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ChannelManagerComponent} from './channel-manager.component';

const routes: Routes = [
  {
    path : '',
    component : ChannelManagerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelManagerRoutingModule { }
