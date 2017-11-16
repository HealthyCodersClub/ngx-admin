import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { NamedPanelComponent } from './named-panel/named-panel.component';


const components = [DatePickerComponent, NamedPanelComponent];

@NgModule({
  imports: [
    FormsModule,
    NgbModule,
    CommonModule,
  ],
  declarations: [ ...components],
  exports: [...components],
})
export class ComponentLibModule { }
