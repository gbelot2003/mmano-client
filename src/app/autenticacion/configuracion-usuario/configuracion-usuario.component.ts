import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../../_servicios/user-info.service";

@Component({
  selector: 'app-configuracion-usuario',
  templateUrl: './configuracion-usuario.component.html',
  styleUrls: ['./configuracion-usuario.component.sass']
})
export class ConfiguracionUsuarioComponent implements OnInit {
  datos:any;
  constructor(private userInfoService:UserInfoService) { }

  ngOnInit() {
    this.userInfoService.inicial().subscribe(datos => {
      localStorage.setItem("user", JSON.stringify(datos));
      this.datos = datos;
    });
  }

}
