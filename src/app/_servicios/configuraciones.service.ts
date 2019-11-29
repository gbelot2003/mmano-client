import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AutenticacionService} from "../autenticacion/autenticacion.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesService {
  headers: HttpHeaders;

  constructor(private http: HttpClient, private autenticacionService: AutenticacionService) {
    let token = autenticacionService.token();
    this.headers = new HttpHeaders({ "Accept": "application/json", "Authorization": token })
  }

  newUsers(){
    return this.http.get(environment.endpoint + "/configuraciones/nuevos", {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }


}
