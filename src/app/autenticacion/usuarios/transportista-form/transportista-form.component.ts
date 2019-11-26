import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-transportista-form',
  templateUrl: './transportista-form.component.html',
  styleUrls: ['./transportista-form.component.sass']
})
export class TransportistaFormComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  @Input() user:any;
  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.identidad.validator = Validators.required;
    this.ParentForm.controls.rtn.validator = Validators.required;
    this.ParentForm.controls.rtn_image.validator = Validators.required;
    this.ParentForm.controls.cuenta_image.validator = Validators.required;
    this.ParentForm.controls.descripcion_vehiculos.validator = Validators.required;
  }

  ngOnDestroy() {
    this.ParentForm.controls.identidad.validator = null;
    this.ParentForm.controls.rtn.validator = null;
    this.ParentForm.controls.rtn_image.validator = null;
    this.ParentForm.controls.cuenta_image.validator = null;
    this.ParentForm.controls.descripcion_vehiculos.validator = null;
  }

}
