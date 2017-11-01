import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [{
    path: '',
    component: FeaturesComponent,
    children : [{
        path: 'home',
        component: HomeComponent,
    }, {
        path: 'booking',
        loadChildren : './booking/booking.module#BookingModule',
    }, {
        path : 'availability',
        loadChildren : './availability/availability.module#AvailabilityModule',
    }, {
        path : 'email',
        loadChildren : './email/email.module#EmailModule',
    }, {
        path : 'rooms',
        loadChildren : './rooms/rooms.module#RoomsModule',
    }, {
        path: 'revenue',
        loadChildren : './revenue/revenue.module#RevenueModule',
    }, {
        path: 'setup',
        loadChildren : './setup/setup.module#SetupModule',
    }, {
        path: 'reports',
        loadChildren : './reports/reports.module#ReportsModule',
    }, {
        path : 'channel-manager',
        loadChildren : './channel-manager/channel-manager.module#ChannelManagerModule',
    }, {
        path : 'user',
        loadChildren : './user/user.module#UserModule',
    }, {
        path: 'logout',
        redirectTo : '',
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule { }

export const routedComponents = [];
