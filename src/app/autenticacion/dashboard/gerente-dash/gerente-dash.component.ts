import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gerente-dash',
  templateUrl: './gerente-dash.component.html',
  styleUrls: ['./gerente-dash.component.sass']
})
export class GerenteDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
