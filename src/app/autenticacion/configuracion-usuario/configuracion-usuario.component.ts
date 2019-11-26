import { Component, OnInit } from '@angular/core';
import {UserInfoService} from "../../_servicios/user-info.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DepartamentosService} from "../../_servicios/departamentos.service";
import {MunicipioServiceService} from "../../_servicios/municipio-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-configuracion-usuario',
  templateUrl: './configuracion-usuario.component.html',
  styleUrls: ['./configuracion-usuario.component.sass']
})
export class ConfiguracionUsuarioComponent implements OnInit {
  editGroup: FormGroup;
  datos:any;
  private departamentos: any;
  private municipios: any;
  private mensaje: any;
  private errores: any;
  private selectedDepartamento:any;
  constructor(
    private userInfoService:UserInfoService,
    private formbuilder: FormBuilder,
    private departamentoService: DepartamentosService,
    private municipiosService: MunicipioServiceService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.userInfoService.inicial().subscribe(datos => {
      this.datos = datos;
      this.municipiosService.handler(datos.departamento_id).subscribe(data => {
        this.municipios =  data;
      });

      this.editGroup.get('telefono').setValue(this.datos.telefono);
      this.editGroup.get('departamento_id').setValue(this.datos.departamento_id);
      this.editGroup.get('municipio_id').setValue(this.datos.municipio_id);
      this.editGroup.get('calle').setValue(this.datos.calle);
      this.editGroup.get('casa').setValue(this.datos.casa);

    });

    this.editGroup = this.formbuilder.group({
      telefono:['', [Validators.required]],
      departamento_id:['', [Validators.required]],
      municipio_id:['', [Validators.required]],
      calle:['', [Validators.required]],
      casa:['', [Validators.required]]
    });

    this.departamentoService.handler().subscribe(data => {
      this.departamentos =  data;
    });
  }

  validar(){
    this.userInfoService.configuraciones(
      this.datos.id,
      this.editGroup.controls.departamento_id.value,
      this.editGroup.controls.municipio_id.value,
      this.editGroup.controls.casa.value,
      this.editGroup.controls.calle.value,
      this.editGroup.controls.telefono.value,
    ).subscribe(
      datos => {
        this.mensaje = datos;
        this.router.navigate(['dashboard']);
      },
      error => {
        this.mensaje = error.error.message;
        this.errores = error.error.errors;
      });
    if(!this.editGroup.invalid){
      return;
    }
  }

  onDepartamentosChange(){
    this.municipiosService.handler(this.selectedDepartamento).subscribe(datos => {
      this.municipios = datos;
    })
  }

}
