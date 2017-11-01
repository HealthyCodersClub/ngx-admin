import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { BillingHistoryComponent } from './billing-history/billing-history.component';
import { CreditUpdateComponent } from './credit-update/credit-update.component';
import { MembershipComponent } from './membership/membership.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  declarations: [UserComponent, MyAccountComponent, ManageUsersComponent, BillingHistoryComponent, CreditUpdateComponent, MembershipComponent],
})
export class UserModule { }
