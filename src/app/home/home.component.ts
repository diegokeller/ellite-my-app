// Importar outros códigos ou componentes
import { Component, OnInit } from '@angular/core';

// Anotação para declarar que isso é um componente
@Component({
  selector: 'app-home', // <app-home></app-home>
  templateUrl: './home.component.html', // Caminho do HTML
  styleUrls: ['./home.component.scss'] // Caminho do CSS
})
export class HomeComponent implements OnInit {

  // Atributos | Informações que quero mostrar na página
  preco = 10.59;
  hoje = new Date();

  // Executado quando o componente é criado
  constructor() {
    console.log('Construiu HomeComponente');
  }

  // Quando o componente é inicializado
  ngOnInit(): void {
    console.log('Inicializou HomeComponente');
  }

}
