import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.sass']
})
export class TransportistaComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.identidad.validator = null;
    this.ParentForm.controls.rtn.validator = null;
    this.ParentForm.controls.rtn_image.validator = null;
    this.ParentForm.controls.cuenta_image.validator = null;
    this.ParentForm.controls.descripcion_vehiculos.validator = null;
  }

  ngOnDestroy() {
    this.ParentForm.controls.identidad.validator = null;
    this.ParentForm.controls.rtn.validator = null;
    this.ParentForm.controls.rtn_image.validator = null;
    this.ParentForm.controls.cuenta_image.validator = null;
    this.ParentForm.controls.descripcion_vehiculos.validator = null;
  }

}
