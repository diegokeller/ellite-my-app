import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicosModule } from './servicos/servicos.module';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'servicos',
    loadChildren: () => import('./servicos/servicos.module').then(m => ServicosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
