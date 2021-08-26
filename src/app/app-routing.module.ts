import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadeRandomComponent } from './atividade-random/atividade-random.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';

const routes: Routes = [
  { path: 'atividadeRandom', component: AtividadeRandomComponent },
  { path: 'telaInicio', component: TelaInicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
