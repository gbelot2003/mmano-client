import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  handler(mensaje:string){
    return mensaje;
  }
}
