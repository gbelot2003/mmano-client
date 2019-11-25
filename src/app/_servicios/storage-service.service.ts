import { Injectable } from '@angular/core';
import {JSONSchema, StorageMap} from '@ngx-pwa/local-storage';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor(private storage: StorageMap) { }

}
