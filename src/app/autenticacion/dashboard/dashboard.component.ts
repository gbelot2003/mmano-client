import { UserInfoService } from './../../_servicios/user-info.service';
import { Component, OnInit } from '@angular/core';
import { PruebasService } from '../../_servicios/pruebas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  datos:any;
  constructor(private userInfoService:UserInfoService) { }

  ngOnInit() {
    this.userInfoService.inicial().subscribe(datos => {
      this.datos = datos;
      console.log(datos);
    });
  }

}
