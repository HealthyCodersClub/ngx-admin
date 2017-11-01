import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailRoutingModule } from './email-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { DraftComponent } from './draft/draft.component';
import { SentComponent } from './sent/sent.component';
import { JunkComponent } from './junk/junk.component';
import { TrashComponent } from './trash/trash.component';
import { EmailComponent } from './email.component';

@NgModule({
  imports: [
    CommonModule,
    EmailRoutingModule
  ],
  declarations: [InboxComponent, DraftComponent, SentComponent, JunkComponent, TrashComponent, EmailComponent]
})
export class EmailModule { }
