import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-consultoria',
  templateUrl: './consultoria.component.html',
  styleUrls: ['./consultoria.component.scss']
})
export class ConsultoriaComponent implements OnInit {

  nome: string;

  constructor() { }

  ngOnInit(): void {
  }

}
