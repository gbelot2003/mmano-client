import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificadorComponent } from './verificador.component';

describe('VerificadorComponent', () => {
  let component: VerificadorComponent;
  let fixture: ComponentFixture<VerificadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
