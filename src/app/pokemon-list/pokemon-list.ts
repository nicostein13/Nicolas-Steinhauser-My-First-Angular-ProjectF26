import { Component, input, output, inject } from '@angular/core';
import Pokemon from '../shared/model/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonEvent } from '../pokemon-event';
import { PokemonService } from '../services/pokemon';
import {RouterLink} from '@angular/router';


@Component({
  imports: [
    PokemonListItem,
    RouterLink
  ],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {

  private PokemonService = inject(PokemonService);

  pokemonList = this.PokemonService.pokemonList;

  pokemonWithActive = this.PokemonService.pokemonWithActive;

  activeCount = this.PokemonService.activeCount;

  onRemove(id: number){
    this.PokemonService.removePokemon(id);
  }

  protected readonly PokemonListItem = PokemonListItem;

}
