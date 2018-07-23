import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoLinealComponent } from './grafico-lineal.component';

describe('GraficoLinealComponent', () => {
  let component: GraficoLinealComponent;
  let fixture: ComponentFixture<GraficoLinealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoLinealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
