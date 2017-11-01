import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InboxComponent} from './inbox/inbox.component';
import {DraftComponent} from './draft/draft.component';
import {JunkComponent} from './junk/junk.component';
import {SentComponent} from './sent/sent.component';
import {TrashComponent} from './trash/trash.component';

const routes: Routes = [
  {
    path : 'inbox',
    component : InboxComponent,
  }, {
    path : 'draft',
    component : DraftComponent,
  }, {
    path : 'junk',
    component : JunkComponent,
  }, {
    path : 'sent',
    component : SentComponent,
  }, {
    path : 'trash',
    component : TrashComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailRoutingModule { }
