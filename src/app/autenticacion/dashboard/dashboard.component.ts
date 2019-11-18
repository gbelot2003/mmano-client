import { Component, OnInit } from '@angular/core';
import { PruebasService } from '../../_servicios/pruebas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  datos:any;
  constructor(private PruebasService:PruebasService) { }

  ngOnInit() {
    this.PruebasService.inicial().subscribe(datos=>{
      this.datos = datos;
    })
  }

}
