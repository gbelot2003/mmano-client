import { Component, OnInit } from '@angular/core';
import { AuditService } from 'src/app/_servicios/audit.service';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.sass']
})
export class AuditComponent implements OnInit {
  rows:any;
  private JSON:any;
  constructor(
    private AuditService: AuditService,
    ) {
      this.JSON = JSON;
    }

  ngOnInit() {
    this.AuditService.handle().subscribe((datos: any) => {
      return this.rows = datos;});
  }


}
