import { Component, OnInit } from '@angular/core';
import { PruebasService } from '../_servicios/pruebas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  datos:any;
  constructor(private PruebasService:PruebasService) { }

  ngOnInit() {
    this.PruebasService.inicial().subscribe(datos=>{
      this.datos = datos;
    })
  }

}
