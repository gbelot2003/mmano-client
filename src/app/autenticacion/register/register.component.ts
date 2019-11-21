import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { RegisterServiceService } from '../../_servicios/register-service.service';
import {RolesService} from "../../_servicios/roles.service";
import {DepartamentosService} from "../../_servicios/departamentos.service";
import {MunicipioServiceService} from "../../_servicios/municipio-service.service";
import { CompradoresComponent } from "./compradores/compradores.component";
import { TransportistaComponent } from "./transportista/transportista.component";
import { ProductorIndividualComponent } from "./productor-individual/productor-individual.component";
import { ProductorGrupalComponent } from "./productor-grupal/productor-grupal.component";
import { ProductorRepresentanteComponent } from "./productor-representante/productor-representante.component";
import { PromotorComponent } from "./promotor/promotor.component";
import { AdministradorSistemaComponent } from "./administrador-sistema/administrador-sistema.component";
import { AdministradorMantenimientoComponent } from "./administrador-mantenimiento/administrador-mantenimiento.component";
import { VerificadorComponent } from "./verificador/verificador.component";
import { GerenteComponent } from "./gerente/gerente.component";

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
      name:['Gerardo Antonio Belot Valle', [Validators.required]],
      email:['gbelot2003@yahoo.com', [Validators.required]],
      telefono:['2232-4545', [Validators.required]],
      departamento_id:['1', [Validators.required]],
      municipio_id:['5', [Validators.required]],
      calle:['Sendero las accacias', [Validators.required]],
      casa:['1121', [Validators.required]],
      role:['Comprador', [Validators.required]],
      identidad:['', [Validators.required]],
      rtn:['', [Validators.required]],
      rtn_image:[''],
      grupo_id:[''],
      cuenta_image:[''],
      descripcion_vehiculos:[''],
      contrato:[''],
      fvencimiento:[''],
      fautorizacion:[''],
      acuerdo:[''],
    });

    // suscribimos los cambios del formulario a rxjs
    this.registerGroup.valueChanges.subscribe(newVal => console.log(newVal));

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
      this.register.handler(
        this.registerGroup.controls.name.value,
        this.registerGroup.controls.email.value,
        this.registerGroup.controls.role.value,
        this.registerGroup.controls.telefono.value,
        this.registerGroup.controls.departamento_id.value,
        this.registerGroup.controls.municipio_id.value,
        this.registerGroup.controls.calle.value,
        this.registerGroup.controls.casa.value,
        this.registerGroup.controls.identidad.value,
        this.registerGroup.controls.rtn.value,
        this.registerGroup.controls.rtn_image.value,
        this.registerGroup.controls.grupo_id.value,
        this.registerGroup.controls.cuenta_image.value,
        this.registerGroup.controls.descripcion_vehiculos.value,
        this.registerGroup.controls.contrato.value,
        this.registerGroup.controls.fvencimiento.value,
        this.registerGroup.controls.fautorizacion.value,
        this.registerGroup.controls.acuerdo.value,
      ).subscribe(datos => {
        this.mensaje = "datos ingresados"
      });
      return;

    }
    this.mensaje = "datos incorrectos";
  }

  onDepartamentosChange(){
    this.showMunucipios = true;
    this.municipiosService.handler(this.selectedDepartamento).subscribe(datos => {
      this.municipios = datos;
    })
  }
}
