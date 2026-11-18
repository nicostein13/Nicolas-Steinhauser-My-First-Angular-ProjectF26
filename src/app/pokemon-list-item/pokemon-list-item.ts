import { Component, input, output } from '@angular/core';
import Pokemon from '../shared/model/pokemon';
import { RouterLink } from '@angular/router';
import { PokemonEvent } from '../pokemon-event';
import {PokemonService} from '../services/pokemon';
import {DecimalPipe, SlicePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {StatusLabelPipe} from '../pipes/status-label-pipe';
import {TypeLabelPipe} from '../pipes/type-label-pipe';

@Component({
  imports: [RouterLink, TitleCasePipe, UpperCasePipe, SlicePipe, DecimalPipe, StatusLabelPipe, TypeLabelPipe],
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
