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
  dataSource = new UsuariosDataSorce(this.usuariosIndexService);

  displayedColumns = ['name', 'email', 'telefono']

  constructor(private usuariosIndexService:UsuariosIndexService) { }

  ngOnInit() {
  }

}

export class UsuariosDataSorce extends DataSource<any> {
  data: any;
  constructor(private usuariosIndexService:UsuariosIndexService){
    super();
  }

  connect(): Observable<Usuarios[]>{
    return this.usuariosIndexService.getUsuarios();
  }

  disconnect() {}

}
