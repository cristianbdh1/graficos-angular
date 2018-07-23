import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {ToastrModule} from 'ngx-toastr';
import {ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraficoLinealComponent } from './components/grafico-lineal/grafico-lineal.component';
import { GraficoBarraComponent } from './components/grafico-barra/grafico-barra.component';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { GraficoAranhaComponent } from './components/grafico-aranha/grafico-aranha.component';
import { GraficoPastelComponent } from './components/grafico-pastel/grafico-pastel.component';
import { GraficoRadarComponent } from './components/grafico-radar/grafico-radar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GraficoLinealComponent,
    GraficoBarraComponent,
    GraficoDonaComponent,
    GraficoAranhaComponent,
    GraficoPastelComponent,
    GraficoRadarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing,
    ChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
