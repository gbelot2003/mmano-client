import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-sistema-dash',
  templateUrl: './admin-sistema-dash.component.html',
  styleUrls: ['./admin-sistema-dash.component.sass']
})
export class AdminSistemaDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
