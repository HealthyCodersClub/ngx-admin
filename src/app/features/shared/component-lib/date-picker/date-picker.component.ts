import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  @Input()
  fieldName : String;
  constructor() { }

  ngOnInit() {
  }

}
