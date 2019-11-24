import { UserInfoService } from './../../_servicios/user-info.service';
import { Component, OnInit } from '@angular/core';
import { ProductorIndividualDashComponent } from "./productor-individual-dash/productor-individual-dash.component";
import { ProductorGrupalDashComponent } from "./productor-grupal-dash/productor-grupal-dash.component";
import { ProductorRepesentanteDashComponent } from "./productor-repesentante-dash/productor-repesentante-dash.component";
import { CompradorDashComponent } from "./comprador-dash/comprador-dash.component";
import { TransportistaDashComponent } from "./transportista-dash/transportista-dash.component";
import { PromotorDashComponent } from "./promotor-dash/promotor-dash.component";
import { AdminSistemaDashComponent } from "./admin-sistema-dash/admin-sistema-dash.component";
import { AdminMantenimientoDashComponent } from "./admin-mantenimiento-dash/admin-mantenimiento-dash.component";
import { VerificadorDashComponent } from "./verificador-dash/verificador-dash.component";
import { GerenteDashComponent } from "./gerente-dash/gerente-dash.component";


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
    });
  }

}
