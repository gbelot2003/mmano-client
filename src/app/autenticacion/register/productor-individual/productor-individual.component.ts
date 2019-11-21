import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-productor-individual',
  templateUrl: './productor-individual.component.html',
  styleUrls: ['./productor-individual.component.sass']
})
export class ProductorIndividualComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
