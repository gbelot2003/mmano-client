import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-productor-repesentante-dash',
  templateUrl: './productor-repesentante-dash.component.html',
  styleUrls: ['./productor-repesentante-dash.component.sass']
})
export class ProductorRepesentanteDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
