import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {GruposServiceService} from "../../../_servicios/grupos-service.service";

@Component({
  selector: 'app-productor-grupal',
  templateUrl: './productor-grupal.component.html',
  styleUrls: ['./productor-grupal.component.sass']
})
export class ProductorGrupalComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  grupos: any;

  constructor(private grupoService:GruposServiceService) { }

  ngOnInit() {
    this.grupoService.handler().subscribe(data => {
      this.grupos = data;
    })
  }

}
