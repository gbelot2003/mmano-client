import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-verificador-form',
  templateUrl: './verificador-form.component.html',
  styleUrls: ['./verificador-form.component.sass']
})
export class VerificadorFormComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  @Input() user:any;
  picker:Date;

  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.contrato.validator = Validators.required;
    this.ParentForm.controls.fvencimiento.validator = Validators.required;
    this.ParentForm.get('contrato').setValue(this.user.contrato);

    this.picker = new Date((new Date(this.user.fvencimiento).getTime()));
    this.ParentForm.get('fvencimiento').setValue(this.picker);
  }

  ngOnDestroy(){
    this.ParentForm.controls.contrato.validator = null;
    this.ParentForm.controls.fvencimiento.validator = null;
  }

}
