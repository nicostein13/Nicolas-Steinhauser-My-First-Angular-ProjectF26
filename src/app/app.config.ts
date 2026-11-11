import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { PokemonService } from './services/pokemon';
import { MockPokemonService } from './services/mock-pokemon-service';
import { POKEMON_CONFIG } from './config/pokemon-config';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { loadingInterceptorInterceptor } from './interceptors/loading-interceptor-interceptor';
import {errorInterceptor} from './interceptors/error-interceptor';

//The order does not matter for this app because the loading interceptor only counts
//requests and uses finalized(), which runs on success and on failure. The error interceptor
//only sets a message and rethrows the error. Neither one depends on what the others does.
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([loadingInterceptorInterceptor, errorInterceptor])),
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
