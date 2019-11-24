import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaDashComponent } from './transportista-dash.component';

describe('TransportistaDashComponent', () => {
  let component: TransportistaDashComponent;
  let fixture: ComponentFixture<TransportistaDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportistaDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
