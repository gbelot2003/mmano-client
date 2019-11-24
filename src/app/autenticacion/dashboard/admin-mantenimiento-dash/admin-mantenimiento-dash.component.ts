import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-mantenimiento-dash',
  templateUrl: './admin-mantenimiento-dash.component.html',
  styleUrls: ['./admin-mantenimiento-dash.component.sass']
})
export class AdminMantenimientoDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
