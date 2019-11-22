import { AutenticacionService } from './../autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginGroup: FormGroup;
  urlRetorno: string;
  private mensaje:string;
  constructor(
    private formbuilder: FormBuilder,
    private AutenticacionService:AutenticacionService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit() {
    this.loginGroup = this.formbuilder.group({
      email:['gerardobelot@outlook.com', [Validators.required, Validators.email]],
      password:['Luna010203', [Validators.required]],
      remember_me:[''],
    })
    this.urlRetorno = this.route.snapshot.queryParams["urlRespuesta"];
  }

  validar(){
    if(this.loginGroup.invalid){
      return;
    }

    this.AutenticacionService.login(this.loginGroup.controls.email.value, this.loginGroup.controls.password.value)
    .subscribe(datos => {
      localStorage.setItem("token", JSON.stringify(datos));
      this.mensaje = "Datos correctos";
      this.router.navigate(['dashboard']);

      return;
    });

    this.mensaje = "datos malos";
  }



}
