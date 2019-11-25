import { Usuarios } from './../../models/ususarios.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
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
    this.usuariosIndexService.getUsuarios().subscribe(data => {
      this.usuarios = data.data;
    })
  }

}
