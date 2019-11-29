import { UserInfoService } from './../../_servicios/user-info.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  datos:any;
  roles: string;
  constructor(
    private userInfoService:UserInfoService,
    private router:Router) {
    
  }

  ngOnInit() {
    this.userInfoService.inicial().subscribe(datos => {
      this.datos = datos;
      localStorage.setItem("user", JSON.stringify(datos));
      if (this.datos.passwordAttempt === true){
        this.router.navigate(['passport-require']);
      }
    });
  }

}
