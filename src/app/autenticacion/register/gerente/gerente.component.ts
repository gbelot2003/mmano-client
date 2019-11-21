import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-gerente',
  templateUrl: './gerente.component.html',
  styleUrls: ['./gerente.component.sass']
})
export class GerenteComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
