import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http:HttpClient) { }

  inicial(){
    return this.http.get<any>(environment.endpoint).pipe(
      map(datos=> {
        return datos;
      })
    )
  }
}
