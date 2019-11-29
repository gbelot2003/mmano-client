import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material";
import {UsuariosIndexService} from "../../../_servicios/usuarios-index.service";
import {Router} from "@angular/router";
import {UserInfoService} from "../../../_servicios/user-info.service";

@Component({
  selector: 'app-password-require',
  templateUrl: './password-require.component.html',
  styleUrls: ['./password-require.component.sass']
})
export class PasswordRequireComponent implements OnInit {
  passwordGroup: FormGroup;
  matcher = new MyErrorStateMatcher();
  user: any;

  constructor(
    private formbuilder: FormBuilder,
    private usuariosIndex: UsuariosIndexService,
    private userInfoService:UserInfoService,
    private router:Router,
    ) { }

  ngOnInit() {
    this.userInfoService.inicial().subscribe(data => {
      this.user = data;
    });
    this.passwordGroup = this.formbuilder.group({
      password:['', Validators.required],
      password_confirmation:['']
    },  {validator: this.checkPasswords });
  }

  validar(){
    this.usuariosIndex.sendPasswords(this.user.id, this.passwordGroup.controls.password.value).subscribe(datos => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.router.navigate(["dashboard"]);
    });
  }

  checkPasswords(passwordGroup: FormGroup) { // here we have the 'passwords' group
    let pass = passwordGroup.get('password').value;
    let confirmPass = passwordGroup.get('password_confirmation').value;

    return pass === confirmPass ? null : { notSame: true }
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}
