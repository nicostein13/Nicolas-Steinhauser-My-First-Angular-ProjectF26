import { Component, input, output } from '@angular/core';
import { Pokemon } from '../shared/model/pokemon';
import { PokemonEvent } from '../pokemon-event';
import {PokemonService} from '../services/pokemon';

@Component({
  imports: [],
  selector: 'app-pokemon-list-item',
  styleUrl: './pokemon-list-item.css',
  templateUrl: './pokemon-list-item.html',
})
export class PokemonListItem {
  pokemon = input.required<Pokemon>();
  expanded = false;
  opened = output<Pokemon>();
  remove = output<number>();

  toggle(): void{
    this.expanded = !this.expanded;
    this.opened.emit(this.pokemon());
  }

  onRemove(){
    this.remove.emit(this.pokemon().id);
  }
}
