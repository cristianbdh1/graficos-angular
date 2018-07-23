import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoRadarComponent } from './grafico-radar.component';

describe('GraficoRadarComponent', () => {
  let component: GraficoRadarComponent;
  let fixture: ComponentFixture<GraficoRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoRadarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
