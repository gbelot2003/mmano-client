import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GruposServiceService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get(environment.endpoint + '/grupos')
      .pipe(map(data => data));
  }



}
