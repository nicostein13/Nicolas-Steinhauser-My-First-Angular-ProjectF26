import {Component, input} from '@angular/core';
import { Pokemon } from '../shared/model/pokemon';

@Component({
  imports: [],
  selector: 'app-pokemon-list-item',
  styleUrl: './pokemon-list-item.css',
  templateUrl: './pokemon-list-item.html',
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();
}
