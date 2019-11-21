import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-administrador-mantenimiento',
  templateUrl: './administrador-mantenimiento.component.html',
  styleUrls: ['./administrador-mantenimiento.component.sass']
})
export class AdministradorMantenimientoComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
