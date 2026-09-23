import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './shared/model/pokemon';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  title = 'PokeDex';

  pokemonList: Pokemon[] = [
    {id: 1, name: 'Charizard', passive: 'Blaze', primaryType: 'Fire', secondaryType: 'Flying', status: 'active'},
    {id: 2, name: 'Lucario', passive: 'Steadfast or Inner', primaryType: 'Fighting', secondaryType: 'Steel', status: 'active'},
    {id: 3, name: 'Darkrai', passive: 'Bad Dreams', primaryType: 'Dark', status: 'active'},
    {id: 4, name: 'Rayquaza', passive: 'Air Lock', primaryType: 'Dragon', secondaryType: 'Flying', status: 'active'},
    {id: 5, name: 'Cresselia', passive: 'Levitate', primaryType: 'Fairy', status: 'active'},
    {id: 6, name: 'Kyurem', passive: 'Pressure', primaryType: 'Dragon', secondaryType: 'Ice', status: 'inactive'},
  ]
}
//export class AppComponent{
 // title = 'PokeDex';

 // pokemonList: Pokemon[] = [
  //  {id: 1, name: 'Charizard', passive: 'Blaze',  primaryType: 'Fire', secondaryType: 'Flying', status: 'active'},
 //   {id: 2, name: 'Lucario', passive: 'Steadfast or Inner',  primaryType: 'Fighting', secondaryType: 'Steel', status: 'active'},
//    {id: 3, name: 'Darkrai', passive: 'Bad Dreams',  primaryType: 'Dark', status: 'active'},
  //  {id: 4, name: 'Rayquaza', passive: 'Air Lock',  primaryType: 'Dragon', secondaryType: 'Flying', status: 'active'},
 //   {id: 5, name: 'Cresselia', passive: 'Levitate',  primaryType: 'Fairy', status: 'active'},
 //   {id: 6, name: 'Kyurem', passive: 'Pressure',  primaryType: 'Dragon', secondaryType: 'Ice', status: 'active'},
 // ]
//}
