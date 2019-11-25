import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuariosIndexService} from "../../../_servicios/usuarios-index.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.sass']
})
export class UsuariosEditComponent implements OnInit {
  id:string;
  user:any;
  editGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private usuariosIndexService:UsuariosIndexService,
    private formbuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.usuariosIndexService.getUsuario(this.id).subscribe(data => {
      this.user = data;
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
    })
  }

  valid(){
    if(!this.editGroup.invalid){
      this.usuariosIndexService.editUsuario(
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

      }, error => {

      })
    }
  }
}
