import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http:HttpClient) { }

  handler(
    name,
    email,
    role,
    phone,
    departmentId,
    municipalityId,
    street,
    house,
    identity,
    rtn,
    rtnImage,
    groupId,
    accountImage,
    vehicleDescription,
    contract,
    endsDate,
    authorizationDate,
    agree,
    ){
      return this.http.post(environment.endpoint + "/register",
      {name,
       email,
       role,
       phone,
       departmentId,
       municipalityId,
       street,
       house,
       identity,
        rtn,
        rtnImage,
        groupId,
        accountImage,
        vehicleDescription,
        contract,
        endsDate,
        authorizationDate,
        agree,
      }).pipe(map(datos => {return datos}));
  }
}
