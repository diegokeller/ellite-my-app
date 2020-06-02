import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit, OnDestroy {

  // Atributos (informações) do componente
  titulo: string;
  mensagem: string;

  n1: number;
  n2: number;
  resultado: number;

  constructor() {
    console.log('Criou o component');
  }

  ngOnInit(): void {
    // Inicializar coisas
    console.log('Inicializou o component');

    this.titulo = 'Olá!';
    this.mensagem = 'Gostaria de mais informações...';
  }

  ngOnDestroy(): void {
    // Liberar / limpar
    console.log('Destruiu o component');
  }

  mudou(){
    console.log(this.titulo);
  }

  clicou() {
    console.log('Click!!!');
  }

  calcular() {
    this.resultado = this.n1 + this.n2;
  }

  salvarContato(){
    console.log('Salvou contato');
  }

}
