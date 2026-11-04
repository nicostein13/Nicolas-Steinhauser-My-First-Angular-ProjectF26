import { Routes } from '@angular/router';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';
import { PokemonList } from './pokemon-list/pokemon-list';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonList},
  { path: 'pokemon/:id', component: PokemonDetail},
];
