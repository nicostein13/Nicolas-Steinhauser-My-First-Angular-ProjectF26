import { Routes } from '@angular/router';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';
import { PokemonList } from './pokemon-list/pokemon-list';
import {PokemonForm} from './pokemon-form/pokemon-form';

export const routes: Routes = [
  { path: 'pokemon', component: PokemonList},
  { path: 'pokemon/:id', component: PokemonDetail},
  { path: 'add', component: PokemonForm},
  { path: 'pokemon/edit/:id', component: PokemonForm}
];
