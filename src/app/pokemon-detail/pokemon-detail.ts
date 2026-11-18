import { Component, inject, computed, input } from '@angular/core';
import { PokemonService } from '../services/pokemon';

@Component({
  imports: [],
  selector: 'app-pokemon-detail',
  styleUrl: './pokemon-detail.css',
  templateUrl: './pokemon-detail.html',
})
export class PokemonDetail {

  id = input.required<string>();

  private service = inject(PokemonService);

  pokemon = computed(() =>
    this.service.pokemonList().find(p => p.id === Number(this.id()))
  );


  private openedAt = 0;

  ngOnInit(){
    this.openedAt = Date.now();
    const pokemon = this.service.pokemonList().find(p => p.id === Number(this.id()))
    console.log('[lifecycle] opened:', pokemon?.name );
  }

  ngOnDestroy(){
    const seconds = Math.round((Date.now() - this.openedAt) / 1000);
    const pokemon = this.service.pokemonList().find(p => p.id === Number(this.id()))
    console.log(`[lifecycle] closed: ${pokemon?.name} after ${seconds} seconds`);
  }

}
