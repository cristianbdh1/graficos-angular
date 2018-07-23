import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-pastel',
  templateUrl: './grafico-pastel.component.html',
  styleUrls: ['./grafico-pastel.component.css']
})
export class GraficoPastelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


// Pastel
public pieChartLabels:string[] = ['Descargas', 'En tienda', 'Por mail'];
public pieChartData:number[] = [300, 500, 100];
public pieChartType:string = 'pie';

// Eventos
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}

}
