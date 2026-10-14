import {computed, effect, inject, Service, signal} from '@angular/core';
import {POKEMON_CONFIG} from '../config/pokemon-config';
import Pokemon from '../shared/model/pokemon';

@Service()
export class MockPokemonService {

  private config = inject(POKEMON_CONFIG);

  private pokemon = signal<Pokemon[]>([
    {id: 1, name: 'MOCK Charizard', image:'images/Charizard.png' , passive: 'Blaze', primaryType: 'Fire', secondaryType: 'Flying', status: 'active', region: 'Kanto', height: 1.7, weight: 90.5},
    {id: 2, name: 'MOCK Lucario', image:'images/Lucario.png', passive: 'Steadfast or Inner', primaryType: 'Fighting', secondaryType: 'Steel', status: 'active', region: 'Sinnoh', height: 1.2, weight: 54.0},
    {id: 3, name: 'MOCK Darkrai', image:'images/Darkrai.png', passive: 'Bad Dreams', primaryType: 'Dark', status: 'active', region: 'Sinnoh', height: 1.5, weight: 50.5},
    {id: 4, name: 'MOCK Rayquaza', image:'images/Rayquaza.png', passive: 'Air Lock', primaryType: 'Dragon', secondaryType: 'Flying', status: 'active', region: 'Hoenn', height: 7.0, weight: 206.5},
    {id: 5, name: 'MOCK Cresselia', image:'images/Cresselia.png', passive: 'Levitate', primaryType: 'Fairy', status: 'not usable', region: 'Sinnoh', height: 1.5, weight: 85.6},
    {id: 6, name: 'MOCK Kyurem', image:'images/Kyurem.png', passive: 'Pressure', primaryType: 'Dragon', secondaryType: 'Ice', status: 'inactive', region: 'Unova', height: 3.0, weight: 325.0},

  ]);

  pokemonList = this.pokemon.asReadonly();

  addPokemon(newPokemon : Pokemon){
    this.pokemon.update(list => [...list, newPokemon]);
  }

  pokemonCount = computed(()=>this.pokemon().length);


  selectedStatus = signal<string>(this.config.defaultCategory);

  pokemonWithActive = computed(()=> {
    const status = this.selectedStatus();
    if (status === 'all') {
      return this.pokemon();
    }
    return this.pokemon().filter(p => p.status === status);
  });

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
