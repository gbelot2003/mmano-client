import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {GruposServiceService} from "../../../_servicios/grupos-service.service";

@Component({
  selector: 'app-productor-representante',
  templateUrl: './productor-representante.component.html',
  styleUrls: ['./productor-representante.component.sass']
})
export class ProductorRepresentanteComponent implements OnInit, OnDestroy{
  @Input() ParentForm: FormGroup;
  grupos: any;

  constructor(private grupoService:GruposServiceService) { }

  ngOnInit() {
    this.grupoService.handler().subscribe(data => {
      this.grupos = data;
    });
    this.ParentForm.controls.identidad.validator = null;
    this.ParentForm.controls.rtn.validator = null;
    this.ParentForm.controls.rtn_image.validator = null;
    this.ParentForm.controls.grupo_id.validator = null;
  }

  ngOnDestroy() {
    this.ParentForm.controls.identidad.validator = null;
    this.ParentForm.controls.rtn.validator = null;
    this.ParentForm.controls.rtn_image.validator = null;
    this.ParentForm.controls.grupo_id.validator = null;
  }

}
