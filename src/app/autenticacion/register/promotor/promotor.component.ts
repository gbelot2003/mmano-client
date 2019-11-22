import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-promotor',
  templateUrl: './promotor.component.html',
  styleUrls: ['./promotor.component.sass']
})
export class PromotorComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.ParentForm.controls.contrato.validator = Validators.required;
    this.ParentForm.controls.fvencimiento.validator = Validators.required;
  }

  ngOnDestroy(){
    this.ParentForm.controls.contrato.validator = null;
    this.ParentForm.controls.fvencimiento.validator = null;
  }
}
