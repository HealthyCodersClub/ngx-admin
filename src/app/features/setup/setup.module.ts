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

@NgModule({
  imports: [
    CommonModule,
    SetupRoutingModule,
  ],
  declarations: [SetupComponent, MicrositeContentComponent, PlotCategoryComponent, PlotLocationComponent, TaxComponent, SettingsComponent, ContactComponent, ExtraComponent],
})
export class SetupModule { }
