import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportistaFormComponent } from './transportista-form.component';

describe('TransportistaFormComponent', () => {
  let component: TransportistaFormComponent;
  let fixture: ComponentFixture<TransportistaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportistaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
