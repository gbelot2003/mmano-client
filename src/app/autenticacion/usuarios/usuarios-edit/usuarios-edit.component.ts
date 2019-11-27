import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuariosIndexService} from "../../../_servicios/usuarios-index.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RolesService} from "../../../_servicios/roles.service";
import {DepartamentosService} from "../../../_servicios/departamentos.service";
import {MunicipioServiceService} from "../../../_servicios/municipio-service.service";
import { AdministradorSistemaFormComponent } from "../administrador-sistema-form/administrador-sistema-form.component";
import {ConfiguracionesService} from "../../../_servicios/configuraciones.service";

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.sass']
})

export class UsuariosEditComponent implements OnInit{
  id:string;
  user:any;
  editGroup: FormGroup;
  private roles: any;
  private departamentos: any;
  private municipios: any;
  private selectedRole: string;
  private selectedDepartamento: number;
  private selectedMunicipio: number;
  private registrado:boolean;
  ename: string;
  constructor(
    private route: ActivatedRoute,
    private usuariosIndexService:UsuariosIndexService,
    private formbuilder: FormBuilder,
    private rolesService: RolesService,
    private departamentoService: DepartamentosService,
    private municipiosService: MunicipioServiceService,
    private router:Router,
    private configurations:ConfiguracionesService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuariosIndexService.getUsuario(this.id).subscribe(data => {
      this.user = data;
      this.editGroup.get('name').setValue(this.user.name);
      this.editGroup.get('email').setValue(this.user.email);
      this.editGroup.get('telefono').setValue(this.user.telefono);
      this.editGroup.get('departamento_id').setValue(this.user.departamento_id);
      this.editGroup.get('municipio_id').setValue(this.user.municipio_id);
      this.municipiosService.handler(this.user.departamento_id).subscribe(data => {
        this.municipios =  data;
      });
      this.editGroup.get('calle').setValue(this.user.calle);
      this.editGroup.get('casa').setValue(this.user.casa);
      this.editGroup.get('role').setValue(this.user.roles[0].name);
      this.editGroup.get('identidad').setValue(this.user.identidad);
      this.editGroup.get('rtn').setValue(this.user.rtn);
      this.editGroup.get('rtn_image').setValue(this.user.rtn_image);
      this.editGroup.get('grupo_id').setValue(this.user.grupo_id);
      this.editGroup.get('cuenta_image').setValue(this.user.cuenta_image);
      this.editGroup.get('descripcion_vehiculos').setValue(this.user.descripcion_vehiculos);
      this.editGroup.get('contrato').setValue(this.user.contrato);
      this.editGroup.get('fvencimiento').setValue(this.user.fvencimiento);
      this.editGroup.get('fautorizacion').setValue(this.user.fautorizacion);
      this.editGroup.get('acuerdo').setValue(this.user.acuerdo);

    });

    this.editGroup = this.formbuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.required, Validators.email]],
      telefono:['', [Validators.required]],
      departamento_id:['', [Validators.required]],
      municipio_id:['', [Validators.required]],
      calle:['', [Validators.required]],
      casa:['', [Validators.required]],
      role:['', [Validators.required]],
      identidad:[''],
      rtn:[''],
      rtn_image:[''],
      grupo_id:[''],
      cuenta_image:[''],
      descripcion_vehiculos:[''],
      contrato:[''],
      fvencimiento:[''],
      fautorizacion:[''],
      acuerdo:[''],
    });

    this.rolesService.handler().subscribe(datos => {
      this.roles = datos;
    });

    this.departamentoService.handler().subscribe(data => {
      this.departamentos =  data;
    });

    this.configurations.changeStatus(this.id).subscribe(data => {
      console.log('done');
    })

  }

  valid(){
    this.usuariosIndexService.editUsuario(
      this.id,
      this.editGroup.controls.name.value,
      this.editGroup.controls.email.value,
      this.editGroup.controls.role.value,
      this.editGroup.controls.telefono.value,
      this.editGroup.controls.departamento_id.value,
      this.editGroup.controls.municipio_id.value,
      this.editGroup.controls.calle.value,
      this.editGroup.controls.casa.value,
      this.editGroup.controls.identidad.value,
      this.editGroup.controls.rtn.value,
      this.editGroup.controls.rtn_image.value,
      this.editGroup.controls.grupo_id.value,
      this.editGroup.controls.cuenta_image.value,
      this.editGroup.controls.descripcion_vehiculos.value,
      this.editGroup.controls.contrato.value,
      this.editGroup.controls.fvencimiento.value,
      this.editGroup.controls.fautorizacion.value,
      this.editGroup.controls.acuerdo.value,
    ).subscribe(data => {
      console.log(data);
      this.router.navigate(['listado-usuarios']);
    }, error => {
      console.log(error);
      alert(error.message)
    })
  }


}
