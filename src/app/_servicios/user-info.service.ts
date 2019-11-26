import { AutenticacionService } from './../autenticacion/autenticacion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators';
import {pipe} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  headers:HttpHeaders;

  constructor(private http:HttpClient, private autenticacionService: AutenticacionService) {
    let token = autenticacionService.token();
    this.headers = new HttpHeaders({"Accept":"application/json","Authorization": token})
   }

   inicial(){
     return this.http.get<any>(environment.endpoint + "/user", {headers: this.headers})
      .pipe(map(user => {
        return user;
      }));
   }

   configuraciones(id, departamento_id, municipio_id, casa, calle, telefono){
    return this.http.post(environment.endpoint + "/configuraciones/" + id, {
      departamento_id, municipio_id, casa, calle, telefono}, {headers: this.headers})
     .pipe(map(user => {
       return user;
     }))
   }
}
