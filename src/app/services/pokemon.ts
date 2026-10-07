import {Service, signal, computed, effect} from '@angular/core';
import { Pokemon } from '../shared/model/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonEvent } from '../pokemon-event';

@Service()
export class PokemonService {
  private pokemon = signal<Pokemon[]>([
    {id: 1, name: 'Charizard', image:'images/Charizard.png' , passive: 'Blaze', primaryType: 'Fire', secondaryType: 'Flying', status: 'active', region: 'Kanto', height: 1.7, weight: 90.5},
    {id: 2, name: 'Lucario', image:'images/Lucario.png', passive: 'Steadfast or Inner', primaryType: 'Fighting', secondaryType: 'Steel', status: 'active', region: 'Sinnoh', height: 1.2, weight: 54.0},
    {id: 3, name: 'Darkrai', image:'images/Darkrai.png', passive: 'Bad Dreams', primaryType: 'Dark', status: 'active', region: 'Sinnoh', height: 1.5, weight: 50.5},
    {id: 4, name: 'Rayquaza', image:'images/Rayquaza.png', passive: 'Air Lock', primaryType: 'Dragon', secondaryType: 'Flying', status: 'active', region: 'Hoenn', height: 7.0, weight: 206.5},
    {id: 5, name: 'Cresselia', image:'images/Cresselia.png', passive: 'Levitate', primaryType: 'Fairy', status: 'not usable', region: 'Sinnoh', height: 1.5, weight: 85.6},
    {id: 6, name: 'Kyurem', image:'images/Kyurem.png', passive: 'Pressure', primaryType: 'Dragon', secondaryType: 'Ice', status: 'inactive', region: 'Unova', height: 3.0, weight: 325.0},

  ]);

  pokemonList = this.pokemon.asReadonly();

  addPokemon(newPokemon : Pokemon){
    this.pokemon.update(list => [...list, newPokemon]);
  }

  pokemonCount = computed(()=>this.pokemon().length);

  pokemonWithActive = computed(()=>
                                this.pokemon().filter(p => p.status === 'active'));

  activeCount = computed(()=> this.pokemonWithActive().length);

  constructor(){
    effect(()=> {
      console.log('Pokemon count is now', this.pokemonCount());
    });
  }

  removePokemon(id: number){
    this.pokemon.update(list =>list.filter(i => i.id != id));
  }
}
