import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-comprador-form',
  templateUrl: './comprador-form.component.html',
  styleUrls: ['./comprador-form.component.sass']
})
export class CompradorFormComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  @Input() user:any;
  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.identidad.validator = Validators.required;
    this.ParentForm.controls.rtn.validator = Validators.required;
    this.ParentForm.controls.rtn_image.validator = Validators.required;
  }

  ngOnDestroy(){
    this.ParentForm.controls.contrato.validator = null;
    this.ParentForm.controls.fvencimiento.validator = null;
  }
}
