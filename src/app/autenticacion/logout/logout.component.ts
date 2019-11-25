import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {LogoutService} from "../../_servicios/logout.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private logut:LogoutService) { }

  ngOnInit() {
    this.logut.handler().subscribe(data => {
      localStorage.clear();
      window.location.reload();
      return console.log(data);
    });
  }

}
