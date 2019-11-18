import { UsuariosIndexService } from './../../_servicios/usuarios-index.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {
  usuarios:any;
  constructor(private usuariosIndexService:UsuariosIndexService) { }

  ngOnInit() {

  }

}
