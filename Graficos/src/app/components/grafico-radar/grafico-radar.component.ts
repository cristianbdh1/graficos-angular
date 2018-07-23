import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-radar',
  templateUrl: './grafico-radar.component.html',
  styleUrls: ['./grafico-radar.component.css']
})
export class GraficoRadarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Radar
  public polarAreaChartLabels:string[] = ['Descargas', 'En tienda', 'Por mail', 'Tele venta', 'En la corporación'];
  public polarAreaChartData:number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
 
  // Eventos
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }



}
