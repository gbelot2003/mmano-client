import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  headers:HttpHeaders;
  constructor(private http:HttpClient) {
    this.headers = new HttpHeaders({"Accept":"application/json", "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRlYTkwOTBjYmE2YzE0YjQxODMyMTcyZWQxYzI0OTZlODA2MWQwYjU5ZWM3YWI3ZjJiZDIyZTk5ZWJkNjQzOWJmZjZiNzdmOGFiYmMwNzA0In0.eyJhdWQiOiIxIiwianRpIjoiZGVhOTA5MGNiYTZjMTRiNDE4MzIxNzJlZDFjMjQ5NmU4MDYxZDBiNTllYzdhYjdmMmJkMjJlOTllYmQ2NDM5YmZmNmI3N2Y4YWJiYzA3MDQiLCJpYXQiOjE1NzQwNjI4MzAsIm5iZiI6MTU3NDA2MjgzMCwiZXhwIjoxNTg5Nzg3NjMwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GMuQYy4PAwjCFbXO6IuR5bmkUuWvsUDEoNAFGRCvKkZB1dGR1UrotUb3GAKCM718f7iZnojxb5eo6AcNLPIJLVcZKR9R-7IzRfbRC9GsOLlZe5cZ7vI_8Z_ymgf_Ys_FXxyill_wxzbVUYqGcAznQn9N9yPDM6H1V9_mKxdSMFZxfx9-V9L43sbYQcA9oKKuTNbiIIkNuog8I8FA7VXNkM1tIjod10wC2wd6-0_8EqhOtzD99bOWbfAgATFliqSyzid0kRETWtlqztgL_rs-NgU-RTImGrqEWaHIbKFMda9bq5sb98UvjAelpovvmglOlVZ-T1MiQMGIWfxq6x_PfcgQ-AeUxSk5bQMCZyaATKXypiOAzCLiGc7wnTXX-onKxa7yvFRq49_NFx1I2PTfQlbs2EwOoIDMmZNzkY57zHNvQsGACD88D8S-AcdUS0skArxQ83cQiz9QyZlERak5_6XYW3lel7pBPnFJpRDw3WsO1lhNHsM9CQO-fUb4MzYdN_1Ay_74-vvP_b7HzTnab8V29S4LjwfgdkJPPc8ZBa9eWfuxciKCs0AFvG4qYY05eiLEIWwZtX-0LcHLaG9NBrvUMyZBbs9aicVdXvPPRHQX4SrwbbdKy0c6xZltuYAezXKwsUW0vcEhhm9Gyj-h4GqbNrMTKcg3tmyqQbHsTKg"});
   }

  inicial(){
    return this.http.get<any>(environment.endpoint, {headers: this.headers}).pipe(
      map(datos=> {
        return datos;
      })
    )
  }
}
