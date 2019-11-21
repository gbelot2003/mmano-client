import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-productor-grupal',
  templateUrl: './productor-grupal.component.html',
  styleUrls: ['./productor-grupal.component.sass']
})
export class ProductorGrupalComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
