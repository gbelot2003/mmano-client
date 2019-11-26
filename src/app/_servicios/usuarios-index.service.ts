import { AutenticacionService } from './../autenticacion/autenticacion.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/ususarios.model';

@Injectable({
  providedIn: 'root'
})

export class UsuariosIndexService {
  headers: HttpHeaders;

  constructor(private http: HttpClient, private autenticacionService: AutenticacionService) {
    let token = autenticacionService.token();
    this.headers = new HttpHeaders({ "Accept": "application/json", "Authorization": token })
  }

  getUsuarios(){
    return this.http.get(environment.endpoint + "/users", {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }

  getUsuario(id) {
    return  this.http.get(environment.endpoint + '/users/' + id, {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }

  editUsuario(id, name, email, role, telefono, departamento_id, municipio_id, calle, casa, identidad, rtn, rtn_image,
              grupo_id, cuenta_image, descripcion_vehiculos, contrato, fvencimiento, fautorizacion, acuerdo,){
    return this.http.patch(environment.endpoint + "/users/" + id,
      {name, email, role, telefono, departamento_id, municipio_id, calle, casa, identidad, rtn, rtn_image,
        grupo_id, cuenta_image, descripcion_vehiculos, contrato, fvencimiento, fautorizacion, acuerdo},
      {headers: this.headers}).pipe(map(datos => {return datos}));
  }


}
