import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import { ContatoComponent } from './contato/contato.component';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from './pokemon/pokemon.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    // Componentes que o meu módulo possui
    AppComponent,
    HomeComponent,
    ContatoComponent,
    PokemonComponent
  ],
  imports: [
    // Outros Módulos que quero usar
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // Serviços que o meu módulo possui
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
