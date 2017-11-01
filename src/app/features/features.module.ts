import { NgModule } from '@angular/core';

import { FeaturesComponent } from './features.component';
import { HomeModule }  from './home/home.module';
import { ThemeModule } from '../@theme/theme.module';
import { FeaturesRoutingModule } from './features-routing.module';

const FEATURES_COMPONENTS = [
    FeaturesComponent,
];

@NgModule({
    imports: [
        ThemeModule,
        HomeModule,
        FeaturesRoutingModule
    ],
    exports: [],
    declarations: [
        ...FEATURES_COMPONENTS
    ],
    providers: [],
})
export class FeaturesModule { 

}
