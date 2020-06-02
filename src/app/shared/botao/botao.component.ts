import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  // Anotações - Annotations
  // -> Java / C#
  @Input()
  nome: string;

  @Input()
  cor: string;

  @Output()
  clicou: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.clicou.emit();
  }

}
