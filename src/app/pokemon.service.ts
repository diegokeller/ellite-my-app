import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  buscarPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }

}
