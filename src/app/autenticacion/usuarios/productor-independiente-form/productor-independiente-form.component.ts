import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-productor-independiente-form',
  templateUrl: './productor-independiente-form.component.html',
  styleUrls: ['./productor-independiente-form.component.sass']
})
export class ProductorIndependienteFormComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  @Input() user:any;
  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.identidad.validator = Validators.required;
    this.ParentForm.controls.rtn.validator = Validators.required;
    this.ParentForm.controls.rtn_image.validator = Validators.required;

    this.ParentForm.get('identidad').setValue(this.user.identidad);
    this.ParentForm.get('rtn').setValue(this.user.rtn);
    this.ParentForm.get('rtn_image').setValue(this.user.rtn_image);
  }

  ngOnDestroy(){
    this.ParentForm.controls.contrato.validator = null;
    this.ParentForm.controls.fvencimiento.validator = null;
  }
}
