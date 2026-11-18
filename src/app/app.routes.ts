import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';

import { editGuard } from './edit-guard';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonList},

  {
    path: 'pokemon/:id',
      loadComponent: () =>
      import('./pokemon-detail/pokemon-detail').then(m => m.PokemonDetail)},
  {
    path: 'add',
      loadComponent: () =>
      import('./pokemon-form/pokemon-form').then(m => m.PokemonForm)},
  {
    path: 'pokemon/edit/:id',
      loadComponent: () =>
      import('./pokemon-form/pokemon-form').then(m => m.PokemonForm)}
];
