import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-administrador-sistema',
  templateUrl: './administrador-sistema.component.html',
  styleUrls: ['./administrador-sistema.component.sass']
})
export class AdministradorSistemaComponent implements OnInit, OnDestroy{
  @Input() ParentForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.contract.validator = Validators.required;
    this.ParentForm.controls.endsDate.validator = Validators.required;
  }

  ngOnDestroy(){
    this.ParentForm.controls.contract.validator = null;
    this.ParentForm.controls.endsDate.validator = null;
  }
}
