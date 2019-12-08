import { map } from 'rxjs/operators';
import { GruposServiceService } from './../../_servicios/grupos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.sass']
})
export class GruposComponent implements OnInit {

  private data: any;

  constructor(private grupos: GruposServiceService) { }

  ngOnInit() {
    this.grupos.index().subscribe(map(data => { this.data = data }));
  }

}
