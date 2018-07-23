import { AppComponent } from './app.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficoAranhaComponent } from './components/grafico-aranha/grafico-aranha.component';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';
import { GraficoPastelComponent } from './components/grafico-pastel/grafico-pastel.component';
import { GraficoRadarComponent } from './components/grafico-radar/grafico-radar.component';




const appRoutes: Routes = [
    { path: '', component: GraficoAranhaComponent },
    { path: 'grafico-aranha', component: GraficoAranhaComponent },
    { path: 'grafico-barra', component: GraficoBarraComponent },
    { path: 'grafico-dona', component: GraficoDonaComponent },
    { path: 'grafico-lineal', component: GraficoLinealComponent },
    { path: 'grafico-pastel', component: GraficoPastelComponent },
    { path: 'grafico-radar', component: GraficoRadarComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);