import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-named-panel',
  templateUrl: './named-panel.component.html',
  styleUrls: ['./named-panel.component.scss']
})
export class NamedPanelComponent implements OnInit {

  @Input()
  panelTitle : String;
  constructor() { }

  ngOnInit() {
  }

}
