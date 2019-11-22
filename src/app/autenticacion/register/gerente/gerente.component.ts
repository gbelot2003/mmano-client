import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.sass']
})
export class GerenteComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  constructor() {

  }

  ngOnInit() {
    this.ParentForm.controls.contrato.validator = Validators.required;
    this.ParentForm.controls.fautorizacion.validator = Validators.required;

  }

  ngOnDestroy(){
    this.ParentForm.controls.contrato.validator = null;
    this.ParentForm.controls.fautorizacion.validator = null;
  }
}
