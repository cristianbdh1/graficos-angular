import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAranhaComponent } from './grafico-aranha.component';

describe('GraficoAranhaComponent', () => {
  let component: GraficoAranhaComponent;
  let fixture: ComponentFixture<GraficoAranhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoAranhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoAranhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
