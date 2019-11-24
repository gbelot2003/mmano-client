import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comprador-dash',
  templateUrl: './comprador-dash.component.html',
  styleUrls: ['./comprador-dash.component.sass']
})
export class CompradorDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
