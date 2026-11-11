import {Injectable, Service, signal, computed, effect, inject} from '@angular/core';
import Pokemon from '../shared/model/pokemon';
import { PokemonListItem } from '../pokemon-list-item/pokemon-list-item';
import { PokemonEvent } from '../pokemon-event';
import {POKEMON_CONFIG} from '../config/pokemon-config';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap, map } from 'rxjs';


export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { slot: number; type: { name: string } }[];
  abilities: { ability: { name: string }; is_hidden: boolean }[];
  sprites: { front_default: string | null };
}

@Injectable()
export class PokemonService {

  private config = inject(POKEMON_CONFIG);
  private http = inject(HttpClient);
  error = signal<string | null>(null);
  isLoading = signal(false);

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

  updatePokemon(p: Pokemon): void{
    this.pokemon.update(list => list.map(item=> item.id === p.id ? p : item));
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
    this.loadPokemon();
    effect(()=> {
      console.log('Pokemon count is now', this.pokemonCount());
    });
  }

  removePokemon(id: number){
    this.pokemon.update(list =>list.filter(i => i.id != id));
  }

  loadPokemon() {
    this.isLoading.set(true);
    this.http.get<PokemonListResponse>(`${this.config.apiBaseUrl}/pokemon`,{
      params: {limit: 20},
      })
      .pipe(
        map(res => res.results),
        switchMap(items => forkJoin(items.map(p => this.http.get<PokemonDetailResponse>(`${this.config.apiBaseUrl}/pokemon/${p.name}`)))),
      map(details => details.map(d => this.toPokemon(d)))
      ).subscribe({
      next: (list) =>{
        this.pokemon.set(list);
        this.isLoading.set(false);
      },
      error: () => {
        this.error.set('Could not load data');
        this.isLoading.set(false);
      },
    });
  }

  private toPokemon(d: PokemonDetailResponse): Pokemon {
    return{
      id: d.id,
      name: d.name,
      passive: d.abilities[0]?.ability.name ?? 'none',
      primaryType: d.types[0]?.type.name ?? 'unkown',
      secondaryType: d.types[1]?.type.name,
      status: 'active',
      region: 'Unknown',
      height: d.height,
      weight: d.weight,
      image: d.sprites.front_default ?? undefined
    }
  }
}

