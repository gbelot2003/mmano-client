import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-verificador-dash',
  templateUrl: './verificador-dash.component.html',
  styleUrls: ['./verificador-dash.component.sass']
})
export class VerificadorDashComponent implements OnInit {
  @Input() user:any;
  constructor() { }

  ngOnInit() {
  }

}
