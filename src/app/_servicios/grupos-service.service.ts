import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GruposServiceService {
  headers:HttpHeaders;
  constructor(private http:HttpClient) { }

  handler(){
    return this.http.get(environment.endpoint + "/grupos")
      .pipe(map(data => {return data}))
  }
}
