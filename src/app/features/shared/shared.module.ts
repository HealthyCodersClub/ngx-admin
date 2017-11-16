import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared.service';
import { ThemeModule } from '../../@theme/theme.module';
import { ComponentLibModule } from './component-lib/component-lib.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ThemeModule,
    ComponentLibModule,
    NgbModule.forRoot(),
  ],
  declarations: [],
  providers: [SharedService],
  exports: [
    ThemeModule,
    FormsModule,
    ComponentLibModule,
    NgbModule,
  ],
})
export class SharedModule { }
