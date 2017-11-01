import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelManagerRoutingModule } from './channel-manager-routing.module';
import { ChannelManagerComponent } from './channel-manager.component';

@NgModule({
  imports: [
    CommonModule,
    ChannelManagerRoutingModule
  ],
  declarations: [ChannelManagerComponent]
})
export class ChannelManagerModule { }
