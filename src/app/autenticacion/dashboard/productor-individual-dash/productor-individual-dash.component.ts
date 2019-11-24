import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-productor-individual-dash',
  templateUrl: './productor-individual-dash.component.html',
  styleUrls: ['./productor-individual-dash.component.sass']
})
export class ProductorIndividualDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
