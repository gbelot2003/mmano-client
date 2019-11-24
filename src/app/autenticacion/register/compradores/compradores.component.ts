import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl,
  Validator, Validators, AbstractControl, ValidationErrors, FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html',
  styleUrls: ['./compradores.component.sass']
})
export class CompradoresComponent implements OnInit, OnDestroy {
  identidadV: any;
  @Input() ParentForm: FormGroup;

  ngOnInit() {
    this.ParentForm.controls.identidad.validator = Validators.required;
    this.ParentForm.controls.rtn.validator = Validators.required;
    this.ParentForm.controls.rtn_image.validator = Validators.required;
  }

  ngOnDestroy() {
    this.ParentForm.controls.identidad.validator = null;
    this.ParentForm.controls.rtn.validator = null;
    this.ParentForm.controls.rtn_image.validator = null;
  }



}
