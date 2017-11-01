import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BillingHistoryComponent} from './billing-history/billing-history.component';
import {CreditUpdateComponent} from './credit-update/credit-update.component';
import {ManageUsersComponent} from './manage-users/manage-users.component';
import {MembershipComponent} from './membership/membership.component';
import {MyAccountComponent} from './my-account/my-account.component';

const routes: Routes = [
  {
    path : 'billing-history',
    component : BillingHistoryComponent,
  }, {
    path : 'credit-update',
    component : CreditUpdateComponent,
  }, {
    path : 'manage-users',
    component : ManageUsersComponent,
  }, {
    path : 'membership',
    component : MembershipComponent,
  }, {
    path : 'my-account',
    component : MyAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
