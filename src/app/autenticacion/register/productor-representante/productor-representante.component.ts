import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {GruposServiceService} from "../../../_servicios/grupos-service.service";

@Component({
  selector: 'app-productor-representante',
  templateUrl: './productor-representante.component.html',
  styleUrls: ['./productor-representante.component.sass']
})
export class ProductorRepresentanteComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  grupos: any;

  constructor(private grupoService:GruposServiceService) { }

  ngOnInit() {
    this.grupoService.handler().subscribe(data => {
      this.grupos = data;
    })
  }

}
