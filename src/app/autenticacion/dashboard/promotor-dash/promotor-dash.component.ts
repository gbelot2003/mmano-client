import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-promotor-dash',
  templateUrl: './promotor-dash.component.html',
  styleUrls: ['./promotor-dash.component.sass']
})
export class PromotorDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
