import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-productor-grupal-dash',
  templateUrl: './productor-grupal-dash.component.html',
  styleUrls: ['./productor-grupal-dash.component.sass']
})
export class ProductorGrupalDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
