import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-administrador-sistema',
  templateUrl: './administrador-sistema.component.html',
  styleUrls: ['./administrador-sistema.component.sass']
})
export class AdministradorSistemaComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
