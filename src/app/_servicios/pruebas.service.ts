import { AutenticacionService } from './../autenticacion/autenticacion.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  headers:HttpHeaders;
  constructor(private http:HttpClient, private autenticacionService: AutenticacionService) {
    let token = autenticacionService.token();
    // tslint:disable-next-line: max-line-length
    this.headers = new HttpHeaders({"Accept":"application/json","Authorization": token});
   }

  inicial(){
    return this.http.get<any>(environment.endpoint, {headers: this.headers}).pipe(
      map(datos=> {
        return datos;
      })
    )
  }
}
