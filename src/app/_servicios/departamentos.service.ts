import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AutenticacionService} from "../autenticacion/autenticacion.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  headers:HttpHeaders;

  constructor(private http:HttpClient) {
  }

  handler(){
    return this.http.get(environment.endpoint + "/departamentos")
      .pipe(map(roles => {return roles}))
  }
}
