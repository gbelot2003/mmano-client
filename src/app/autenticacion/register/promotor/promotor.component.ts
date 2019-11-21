import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-promotor',
  templateUrl: './promotor.component.html',
  styleUrls: ['./promotor.component.sass']
})
export class PromotorComponent implements OnInit {
  @Input() ParentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
