import { InjectionToken } from '@angular/core';

export interface PokemonConfig {
  apiBaseUrl: 'https://pokeapi.co/api/v2';
  defaultCategory: string;
}

export const POKEMON_CONFIG = new InjectionToken<PokemonConfig>('pokemon.config');
