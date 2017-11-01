import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { SetupComponent } from './setup.component';
import { MicrositeContentComponent } from './microsite-content/microsite-content.component';
import { PlotCategoryComponent } from './plot-category/plot-category.component';
import { PlotLocationComponent } from './plot-location/plot-location.component';
import { TaxComponent } from './tax/tax.component';
import { SettingsComponent } from './settings/settings.component';
import { ContactComponent } from './contact/contact.component';
import { ExtraComponent } from './extra/extra.component';
import { CouponsComponent } from './coupons/coupons.component';
import { BrandingComponent } from './branding/branding.component';
import { TranslationComponent } from './translation/translation.component';
import { SeoComponent } from './seo/seo.component';
import { ChannelManagerComponent } from './channel-manager/channel-manager.component';

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
  ],
  declarations: [
    SetupComponent,
    MicrositeContentComponent,
    PlotCategoryComponent,
    PlotLocationComponent,
    TaxComponent,
    SettingsComponent,
    ContactComponent,
    ExtraComponent,
    CouponsComponent,
    BrandingComponent,
    TranslationComponent,
    SeoComponent,
    ChannelManagerComponent,
  ],
})
export class SetupModule { }
