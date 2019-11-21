import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.sass']
})
export class TransportistaComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
