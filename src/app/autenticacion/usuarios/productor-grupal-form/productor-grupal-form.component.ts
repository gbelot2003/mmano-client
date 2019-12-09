import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {GruposServiceService} from '../../../_servicios/grupos-service.service';

@Component({
  selector: 'app-productor-grupal-form',
  templateUrl: './productor-grupal-form.component.html',
  styleUrls: ['./productor-grupal-form.component.sass']
})
export class ProductorGrupalFormComponent implements OnInit, OnDestroy {
  @Input() ParentForm: FormGroup;
  @Input() user: any;
  grupos: any;

  constructor(private grupoService: GruposServiceService) { }

  ngOnInit() {
    this.grupoService.index().subscribe(data => {
      this.grupos = data;
    });
    this.ParentForm.controls.identidad.validator = Validators.required;
    this.ParentForm.controls.rtn.validator = Validators.required;
    this.ParentForm.controls.rtn_image.validator = Validators.required;
    this.ParentForm.controls.grupo_id.validator = Validators.required;

    this.ParentForm.get('identidad').setValue(this.user.identidad);
    this.ParentForm.get('rtn').setValue(this.user.rtn);
    this.ParentForm.get('rtn_image').setValue(this.user.rtn_image);
    this.ParentForm.get('grupo_id').setValue(this.user.grupo_id);
  }

  ngOnDestroy(){
    this.ParentForm.controls.contrato.validator = null;
    this.ParentForm.controls.fvencimiento.validator = null;
  }

}
