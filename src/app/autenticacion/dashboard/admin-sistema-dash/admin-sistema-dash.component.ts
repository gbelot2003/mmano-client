import {Component, Input, OnInit} from '@angular/core';
import {ConfiguracionesService} from "../../../_servicios/configuraciones.service";

@Component({
  selector: 'app-admin-sistema-dash',
  templateUrl: './admin-sistema-dash.component.html',
  styleUrls: ['./admin-sistema-dash.component.sass']
})
export class AdminSistemaDashComponent implements OnInit {
  @Input() user:any;
  configuraciones:any;
  constructor(private config: ConfiguracionesService) { }

  ngOnInit() {
    this.config.newUsers().subscribe(data => {
      this.configuraciones = data;
    })
  }

}
