import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AutenticacionService} from "../autenticacion/autenticacion.service";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  headers:HttpHeaders;

  constructor(private http:HttpClient) {
  }

  handler(){
    return this.http.get(environment.endpoint + "/roles")
      .pipe(map(roles => {return roles}))
  }
}
