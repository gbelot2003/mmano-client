import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-transportista-dash',
  templateUrl: './transportista-dash.component.html',
  styleUrls: ['./transportista-dash.component.sass']
})
export class TransportistaDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
