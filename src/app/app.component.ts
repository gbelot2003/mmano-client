import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'client';
  events: string[] = [];
  opened: boolean;

  public onSidenavClose = () => {
    this.opened = false;
  }
}
