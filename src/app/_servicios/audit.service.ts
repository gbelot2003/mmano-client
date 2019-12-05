import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AutenticacionService } from './../autenticacion/autenticacion.service';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuditService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient, private autenticacionService: AutenticacionService) {
    const token = autenticacionService.token();
    this.headers = new HttpHeaders({Accept: 'application/json', Authorization: token});
   }

   handle(){
    return this.http.get(environment.endpoint + '/auditoria', {headers: this.headers})
      .pipe(map(data => data));
   }
}
