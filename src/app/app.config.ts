import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { PokemonService } from './services/pokemon';
import { MockPokemonService } from './services/mock-pokemon-service';
import { POKEMON_CONFIG } from './config/pokemon-config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { loadingInterceptorInterceptor } from './loading-interceptor-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([loadingInterceptorInterceptor])),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: POKEMON_CONFIG,
      useValue: {
        apiBaseUrl: 'https://pokeapi.co/api/v2',
        defaultCategory: 'active',
      },
    },
    //To switch back to the real service either remove the useClass below or
    //change MockPokemonService to PokemonService
    {provide: PokemonService, useClass: PokemonService},
  ],
};
