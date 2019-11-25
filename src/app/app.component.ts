import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent{
  title = 'client';
  events: string[] = [];
  opened: boolean;
  user: any;

  constructor(){}

  public onSidevOpen =() => {
    if(this.opened === true) {
      this.opened = false
    } else {
      this.opened = true;
    };
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  }

  public onSidenavClose = () => {
    this.opened = false;
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  }
}
