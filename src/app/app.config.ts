import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { PokemonService } from './services/pokemon';
import { MockPokemonService } from './services/mock-pokemon-service';
import { POKEMON_CONFIG } from './config/pokemon-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: POKEMON_CONFIG,
      useValue: {
        apiBaseUrl: 'https://pokemon.display.com/api',
        defaultCategory: 'active',
      },
    },
    //To switch back to the real service either remove the useClass below or
    //change MockPokemonService to PokemonService
    {provide: PokemonService, useClass: MockPokemonService},
  ],
};
