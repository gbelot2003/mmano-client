import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSistemaDashComponent } from './admin-sistema-dash.component';

describe('AdminSistemaDashComponent', () => {
  let component: AdminSistemaDashComponent;
  let fixture: ComponentFixture<AdminSistemaDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSistemaDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSistemaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
