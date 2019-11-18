import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
    // hay que agregar un servicio de logout al servidor
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
