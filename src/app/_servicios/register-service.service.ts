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
    role,
    telefono,
    departamento_id,
    municipio_id,
    calle,
    casa,
    identidad,
    rtn,
    rtn_image,
    grupo_id,
    cuenta_image,
    descripcion_vehiculos,
    contrato,
    fvencimiento,
    fautorizacion,
    acuertdo,
    ){
      return this.http.post(environment.endpoint + "/register",
      {name,
       email,
       role,
       telefono,
       departamento_id,
       municipio_id,
       calle,
       casa,
        identidad,
        rtn,
        rtn_image,
        grupo_id,
        cuenta_image,
        descripcion_vehiculos,
        contrato,
        fvencimiento,
        fautorizacion,
        acuerdo,
      }).pipe(map(datos => {return datos}));
  }
}
