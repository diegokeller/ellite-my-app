import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicosModule } from './servicos/servicos.module';
import { SobreModule } from './sobre/sobre.module';
import { ContatoComponent } from './contato/contato.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then(m => ServicosModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(m => SobreModule)
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'pokemon',
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
