import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenteDashComponent } from './gerente-dash.component';

describe('GerenteDashComponent', () => {
  let component: GerenteDashComponent;
  let fixture: ComponentFixture<GerenteDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenteDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenteDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
