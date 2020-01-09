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
      phone: ['', [Validators.required]],
      departmentId: ['', [Validators.required]],
      municipalityId: ['', [Validators.required]],
      street: ['', [Validators.required]],
      house: ['', [Validators.required]],
      role: ['', [Validators.required]],
      identity: [''],
      rtn: [''],
      rtnImage: [''],
      groupId: [''],
      accountImage: [''],
      vehicleDescription: [''],
      contract: [''],
      endsDate: [''],
      authorizationDate: [''],
      agree: [''],
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
        this.registerGroup.controls.phone.value,
        this.registerGroup.controls.departmentId.value,
        this.registerGroup.controls.municipalityId.value,
        this.registerGroup.controls.street.value,
        this.registerGroup.controls.house.value,
        this.registerGroup.controls.identity.value,
        this.registerGroup.controls.rtn.value,
        this.registerGroup.controls.rtnImage.value,
        this.registerGroup.controls.groupId.value,
        this.registerGroup.controls.contract.value,
        this.registerGroup.controls.vehicleDescription.value,
        this.registerGroup.controls.contract.value,
        this.registerGroup.controls.endsDate.value,
        this.registerGroup.controls.authorizationDate.value,
        this.registerGroup.controls.agree.value,
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
