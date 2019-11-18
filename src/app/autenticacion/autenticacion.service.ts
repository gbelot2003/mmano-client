import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  headers:HttpHeaders;

  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({"Accept": "application/json", "Content-Type": "multipart/form-data"});
  }

  login(email, password){
    return this.http.post(environment.endpoint + "/login", {email:email, password:password})
    .pipe(map(datos => {return datos}));
  }
}
