import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorDashComponent } from './comprador-dash.component';

describe('CompradorDashComponent', () => {
  let component: CompradorDashComponent;
  let fixture: ComponentFixture<CompradorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
