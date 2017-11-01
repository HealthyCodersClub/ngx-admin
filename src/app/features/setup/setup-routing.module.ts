import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {ExtraComponent} from './extra/extra.component';
import {MicrositeContentComponent} from './microsite-content/microsite-content.component';
import {PlotCategoryComponent} from './plot-category/plot-category.component';
import {PlotLocationComponent} from './plot-location/plot-location.component';
import {SettingsComponent} from './settings/settings.component';
import {TaxComponent} from './tax/tax.component';

const routes: Routes = [
  {
    path : 'contact',
    component : ContactComponent,
  }, {
    path : 'extra',
    component : ExtraComponent,
  }, {
    path : 'microsite',
    component : MicrositeContentComponent,
  }, {
    path : 'plot-category',
    component : PlotCategoryComponent,
  }, {
    path : 'plot-location',
    component : PlotLocationComponent,
  }, {
    path : 'settings',
    component : SettingsComponent,
  }, {
    path : 'tax',
    component : TaxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupRoutingModule { }
