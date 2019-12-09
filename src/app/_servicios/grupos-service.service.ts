import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import { AutenticacionService } from '../autenticacion/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class GruposServiceService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient, private autenticacionService: AutenticacionService) {
    const token = autenticacionService.token();
    this.headers = new HttpHeaders({Accept: 'application/json', Authorization: token});
  }

  index() {
    return this.http.get(environment.endpoint + '/grupos')
      .pipe(map(data => data));
  }

  edit(id, name) {
    return this.http.post(environment.endpoint + '/grupos/' + id, {id, name}, {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }

  create(name) {
    return this.http.post(environment.endpoint + '/grupos', {name}, {headers: this.headers}).pipe(map(data => {
      return data;
    }));
  }



}
