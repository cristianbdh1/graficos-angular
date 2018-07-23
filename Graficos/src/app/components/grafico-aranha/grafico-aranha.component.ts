import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-aranha',
  templateUrl: './grafico-aranha.component.html',
  styleUrls: ['./grafico-aranha.component.css']
})
export class GraficoAranhaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // Radar
  public radarChartLabels:string[] = ['1', '2', '3', '4', '5', '6', '7'];
 
  public radarChartData:any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';
 
  // Eventos
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
