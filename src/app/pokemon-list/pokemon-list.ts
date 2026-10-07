import { Component, input, output, inject } from '@angular/core';
import { Pokemon } from '../shared/model/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonEvent } from '../pokemon-event';
import { PokemonService } from '../services/pokemon';

@Component({
  imports: [
    PokemonListItem
  ],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {

  private PokemonService = inject(PokemonService);

  pokemonList = this.PokemonService.pokemonList;

  protected readonly PokemonListItem = PokemonListItem;

}
