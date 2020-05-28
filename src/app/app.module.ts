import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    // Componentes que o meu módulo possui
    AppComponent,
    HomeComponent
  ],
  imports: [
    // Outros Módulos que quero usar
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    // Serviços que o meu módulo possui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
