import { map } from 'rxjs/operators';
import { GruposServiceService } from './../../_servicios/grupos-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.sass']
})
export class GruposComponent implements OnInit {
  groupForm: FormGroup;
  private data: any;
  private grupoData: any;
  private state: boolean;

  constructor(
    private grupos: GruposServiceService,
    private formbuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.groupForm = this.formbuilder.group({
      value: [''],
      viewValue: ['', [Validators.required]]
    });

    this.grupos.index().subscribe(data => { this.data = data; });
    this.state = false;
  }

  getItem(item) {

    this.groupForm.get('viewValue').setValue(item.viewValue);
    this.groupForm.get('value').setValue(item.value);
    this.state = true;
    console.log(this.groupForm.controls.viewValue.value);
  }

  limpiar() {
    this.groupForm.get('viewValue').setValue('');
    this.groupForm.get('value').setValue('');
    this.state = false;
  }

  validar() {
    if (this.state) {
      this.grupos.edit(this.groupForm.controls.value.value, this.groupForm.controls.viewValue.value)
        .subscribe(datos => {
        this.grupos.index().subscribe(data => { this.data = data; });
        console.log(datos);
      });
    } else {
      this.grupos.create(this.groupForm.controls.viewValue.value)
        .subscribe(datos => {
        this.limpiar();
        this.grupos.index().subscribe(data => { this.data = data; });
      });
    }
  }

}
