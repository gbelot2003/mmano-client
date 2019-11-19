import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../_servicios/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerGroup: FormGroup;
  private mensaje:string;

  constructor(
    private formbuilder: FormBuilder,
    private register:RegisterServiceService,
    private router:Router
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

}
