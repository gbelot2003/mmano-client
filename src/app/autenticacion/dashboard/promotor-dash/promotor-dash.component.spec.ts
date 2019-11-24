import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotorDashComponent } from './promotor-dash.component';

describe('PromotorDashComponent', () => {
  let component: PromotorDashComponent;
  let fixture: ComponentFixture<PromotorDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotorDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotorDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
