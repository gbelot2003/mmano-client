import { UserInfoService } from './../../_servicios/user-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  datos:any;
  roles: string;
  constructor(private userInfoService:UserInfoService) { }

  ngOnInit() {
    this.userInfoService.inicial().subscribe(datos => {
      localStorage.setItem("user", JSON.stringify(datos));
      this.datos = datos;
      this.roles = datos.roles[0].name;
      console.log(datos);
    });
  }

}
