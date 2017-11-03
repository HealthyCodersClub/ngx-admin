import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelManagerRoutingModule } from './channel-manager-routing.module';
import { ChannelManagerComponent } from './channel-manager.component';
import { ChannelManagerService } from './channel-manager.service';

@NgModule({
  imports: [
    CommonModule,
    ChannelManagerRoutingModule,
  ],
  declarations: [ChannelManagerComponent],
  providers: [ChannelManagerService],
})
export class ChannelManagerModule { }
