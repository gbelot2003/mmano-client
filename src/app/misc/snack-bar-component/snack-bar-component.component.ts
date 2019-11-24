import {Component, Input, OnInit} from '@angular/core';
import {MessageServiceService} from "../../_servicios/message-service.service";

@Component({
  selector: 'app-snack-bar-component',
  templateUrl: './snack-bar-component.component.html',
  styleUrls: ['./snack-bar-component.component.sass']
})
export class SnackBarComponentComponent implements OnInit {

  constructor(_mensaje: MessageServiceService) { }

  ngOnInit() {
  }

}
