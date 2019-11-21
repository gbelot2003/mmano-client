import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../_servicios/register-service.service';
import {RolesService} from "../../_servicios/roles.service";
import {DepartamentosService} from "../../_servicios/departamentos.service";
import {MunicipioServiceService} from "../../_servicios/municipio-service.service";

export interface Roles {
  value: string,
  viewValue: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  registerGroup: FormGroup;
  private mensaje:string;
  private roles: any;
  private departamentos: any;
  private municipios: any;
  private selectedRole: string;
  private selectedDepartamento: number;
  private selectedMunicipio: number;
  private showMunucipios: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private register:RegisterServiceService,
    private router:Router,
    private rolesService: RolesService,
    private departamentoService: DepartamentosService,
    private municipiosService: MunicipioServiceService,

    ) { }

  ngOnInit() {
    this.registerGroup = this.formbuilder.group({
      name:[],
      email:[],
      role:[],
      telefono:[],
      departamento_id:[],
      municipio_id:[],
      calle:[],
      casa:[],
    });

    this.rolesService.handler().subscribe(datos => {
      this.roles = datos;
    });

    this.departamentoService.handler().subscribe(data => {
      this.departamentos =  data;
    });

    this.showMunucipios = false;
  }

  validar(){
    if(this.registerGroup.invalid){
      return;
    }

    this.register.handler(
      this.registerGroup.controls.name.value,
      this.registerGroup.controls.email.value,
      this.registerGroup.controls.role.value,
      this.registerGroup.controls.telefono.value,
      this.registerGroup.controls.departamento_id.value,
      this.registerGroup.controls.municipio_id.value,
      this.registerGroup.controls.calle.value,
      this.registerGroup.controls.casa.value,
      ).subscribe(datos => {
        this.mensaje = "datos ingresados"
      });
    this.mensaje = "datos incorrectos";
  }

  onDepartamentosChange(){
    this.showMunucipios = true;
    this.municipiosService.handler(this.selectedDepartamento).subscribe(datos => {
      this.municipios = datos;
    })
  }
}
