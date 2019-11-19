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

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(environment.endpoint + "/users", {headers: this.headers});
  }

}
