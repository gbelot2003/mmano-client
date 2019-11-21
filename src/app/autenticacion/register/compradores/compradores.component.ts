import {Component, Input, OnInit} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl,
  Validator, Validators, AbstractControl, ValidationErrors, FormBuilder
} from "@angular/forms";

@Component({
  selector: 'app-compradores',
  templateUrl: './compradores.component.html',
  styleUrls: ['./compradores.component.sass']
})
export class CompradoresComponent implements OnInit {

  @Input() ParentForm: FormGroup;

  ngOnInit() {

  }



}
