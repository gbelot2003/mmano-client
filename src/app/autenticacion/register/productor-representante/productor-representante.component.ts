import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-productor-representante',
  templateUrl: './productor-representante.component.html',
  styleUrls: ['./productor-representante.component.sass']
})
export class ProductorRepresentanteComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
