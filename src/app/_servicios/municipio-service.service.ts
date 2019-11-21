import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MunicipioServiceService {

  constructor(private http:HttpClient) { }

  handler(departamento_id: number){
    return this.http.get(environment.endpoint + "/municipios/" + departamento_id)
      .pipe(map(data => {return data}));
  }
}
