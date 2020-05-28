import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultoriaComponent } from './consultoria/consultoria.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ConsultoriaComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'consultoria',
        component: ConsultoriaComponent
      }
    ]),
  ]
})
export class ServicosModule { }
