import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validator, Validators} from '@angular/forms';
import { RegisterServiceService } from '../../_servicios/register-service.service';
import {RolesService} from '../../_servicios/roles.service';
import {DepartamentosService} from '../../_servicios/departamentos.service';
import {MunicipioServiceService} from '../../_servicios/municipio-service.service';
import {MessageServiceService} from '../../_servicios/message-service.service';
import {MatSnackBar} from '@angular/material';
import {SnackBarComponentComponent} from '../../misc/snack-bar-component/snack-bar-component.component';


export interface Roles {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})

export class RegisterComponent implements OnInit {
  registerGroup: FormGroup;
  private mensaje: any;
  private errores: any;
  private roles: any;
  private departamentos: any;
  private municipios: any;
  private selectedRole: string;
  private selectedDepartamento: number;
  private selectedMunicipio: number;
  private registrado: boolean;

  constructor(
    private formbuilder: FormBuilder,
    private register: RegisterServiceService,
    private router: Router,
    private rolesService: RolesService,
    private departamentoService: DepartamentosService,
    private municipiosService: MunicipioServiceService,
    private _snackbar: MatSnackBar,
    ) { }

  ngOnInit() {
    this.registerGroup = this.formbuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required]],
      departamento_id: ['', [Validators.required]],
      municipio_id: ['', [Validators.required]],
      calle: ['', [Validators.required]],
      casa: ['', [Validators.required]],
      role: ['', [Validators.required]],
      identidad: [''],
      rtn: [''],
      rtn_image: [''],
      grupo_id: [''],
      cuenta_image: [''],
      descripcion_vehiculos: [''],
      contrato: [''],
      fvencimiento: [''],
      fautorizacion: [''],
      acuerdo: [''],
    });

    // suscribimos los cambios del formulario a rxjs
    this.registerGroup.valueChanges.subscribe(newVal => console.log(newVal));

    this.rolesService.handler().subscribe(datos => {
      this.roles = datos;
    });

    this.departamentoService.handler().subscribe(data => {
      this.departamentos =  data;
    });

    this.registrado = false;
  }

  validar() {
    if ( !this.registerGroup.invalid ) {
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
      ).subscribe(
        datos => {
          this.mensaje = datos;
          this.registrado = true;
          },
        error => {
          this.mensaje = error.error.message;
          this.errores = error.error.errors;
        });
        return;
    }
  }

  onDepartamentosChange() {
    this.municipiosService.handler(this.selectedDepartamento).subscribe(datos => {
      this.municipios = datos;
    });
  }

  openSnackBar() {
    this._snackbar.openFromComponent(SnackBarComponentComponent, {
      duration: 5000
    });
  }
}
