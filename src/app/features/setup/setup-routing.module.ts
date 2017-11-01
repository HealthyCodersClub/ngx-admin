import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {ExtraComponent} from './extra/extra.component';
import {MicrositeContentComponent} from './microsite-content/microsite-content.component';
import {PlotCategoryComponent} from './plot-category/plot-category.component';
import {PlotLocationComponent} from './plot-location/plot-location.component';
import {SettingsComponent} from './settings/settings.component';
import {TaxComponent} from './tax/tax.component';
import {CouponsComponent} from './coupons/coupons.component';
import {BrandingComponent} from './branding/branding.component';
import {TranslationComponent} from './translation/translation.component';
import {SeoComponent} from './seo/seo.component';
import {ChannelManagerComponent} from './channel-manager/channel-manager.component';

const routes: Routes = [
  {
    path : 'coupons',
    component : CouponsComponent,
  }, {
    path : 'branding',
    component : BrandingComponent,
  }, {
    path : 'translation',
    component : TranslationComponent,
  }, {
    path : 'seo',
    component : SeoComponent,
  }, {
    path : 'channel-manager',
    component : ChannelManagerComponent,
  }, {
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
