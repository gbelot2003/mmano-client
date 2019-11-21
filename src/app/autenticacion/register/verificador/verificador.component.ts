import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-verificador',
  templateUrl: './verificador.component.html',
  styleUrls: ['./verificador.component.sass']
})
export class VerificadorComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
