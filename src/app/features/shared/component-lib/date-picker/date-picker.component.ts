import { Component, OnInit, Input } from '@angular/core';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'ngx-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  d: NgbDatepicker;

  @Input()
  fieldName: String;
  model: Date;
  constructor() { }

  ngOnInit() {
  }
}
