import { AutenticacionService } from './../autenticacion/autenticacion.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators';

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
}
