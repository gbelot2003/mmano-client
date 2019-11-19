import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }

  handler(
    name,
    email,
    password,
    role,
    telefono,
    departamento_id,
    municipio_id,
    calle,
    casa
    ){
      return this.http.post(environment.endpoint + "/register",
      {name,
       email,
       password,
       role,
       telefono,
       departamento_id,
       municipio_id,
       calle,
       casa
      }).pipe(map(datos => {return datos}));
  }
}
