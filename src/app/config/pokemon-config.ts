import { InjectionToken } from '@angular/core';

export interface PokemonConfig {
  apiBaseUrl: string;
  defaultCategory: string;
}

export const POKEMON_CONFIG = new InjectionToken<PokemonConfig>('pokemon.config');
