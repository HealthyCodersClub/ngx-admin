import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from './features-menu';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls : ['./features.component.scss']
})

export class FeaturesComponent implements OnInit {
    menu = MENU_ITEMS;

    constructor() { }

    ngOnInit() { }
}