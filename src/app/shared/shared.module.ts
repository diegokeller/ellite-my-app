import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { BotaoComponent } from './botao/botao.component';

@NgModule({
  declarations: [
    MenuComponent,
    BotaoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    BotaoComponent
  ]
})
export class SharedModule { }
