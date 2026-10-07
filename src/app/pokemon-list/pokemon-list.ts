import { Component, input, output } from '@angular/core';
import { Pokemon } from '../shared/model/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonEvent } from '../pokemon-event';

@Component({
  imports: [
    PokemonListItem
  ],
  selector: 'app-pokemon-list',
  styleUrl: './pokemon-list.css',
  templateUrl: './pokemon-list.html',
})
export class PokemonList {

  protected readonly PokemonListItem = PokemonListItem;

}
