import { AutenticacionService } from './../autenticacion/autenticacion.service';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import {Observable, pipe} from 'rxjs';
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

  /**
   * Obtener lista de usuarios
   */
  getUsuarios(){
    return this.http.get(environment.endpoint + "/users", {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }

  /**
   * Obtener detalles de usuario
   * @param id
   */
  getUsuario(id) {
    return  this.http.get(environment.endpoint + '/users/' + id, {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }

  /**
   * Post edtar información de usuario
   * @param id
   * @param name
   * @param email
   * @param role
   * @param telefono
   * @param departamento_id
   * @param municipio_id
   * @param calle
   * @param casa
   * @param identidad
   * @param rtn
   * @param rtn_image
   * @param grupo_id
   * @param cuenta_image
   * @param descripcion_vehiculos
   * @param contrato
   * @param fvencimiento
   * @param fautorizacion
   * @param acuerdo
   */
  editUsuario(id, name, email, role, telefono, departamento_id, municipio_id, calle, casa, identidad, rtn, rtn_image,
              grupo_id, cuenta_image, descripcion_vehiculos, contrato, fvencimiento, fautorizacion, acuerdo,){
    return this.http.patch(environment.endpoint + "/users/" + id,
      {name, email, role, telefono, departamento_id, municipio_id, calle, casa, identidad, rtn, rtn_image,
        grupo_id, cuenta_image, descripcion_vehiculos, contrato, fvencimiento, fautorizacion, acuerdo},
      {headers: this.headers}).pipe(map(datos => {return datos}));
  }

  /**
   * Dar acceso a usuario
   * @param id
   */
  attemptPassword(id){
    return this.http.get(environment.endpoint + "/configuraciones/attempt/" + id, {headers: this.headers})
      .pipe(map(datos => {return datos}));
  }

  /**
   * Envio de passwords nuevos al ingresar por primera vez
   */
  sendPasswords(id, password){
    return this.http.post(environment.endpoint + "/configuraciones/password-confirmation/" + id, {password}, {headers: this.headers})
      .pipe(map(datos => {return datos}))
  }


}
