import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtividadeRandomComponent } from './atividade-random/atividade-random.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AtividadeRandomComponent,
    TelaInicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
