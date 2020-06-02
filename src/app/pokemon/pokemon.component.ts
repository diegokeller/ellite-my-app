import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemons: any[];

  // Injeção de Dpendência
  // Insere uma instância do serviço desejado
  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.pokeService.buscarPokemons().subscribe( retorno => this.pokemons = retorno.results );
  }

}
