import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pokemon-form',
  styleUrl: './pokemon-form.css',
  templateUrl: './pokemon-form.html',
})
export class PokemonForm {

  private fb = inject(FormBuilder);

  pokemonForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    passive: ['', Validators.required],
    primaryType: ['', Validators.required],
    region: ['', Validators.required]
  })

  private service = inject(PokemonService);

  onSubmit(): void{
    if(this.pokemonForm.invalid) return;

    const value = this.pokemonForm.getRawValue();
    this.service.addPokemon({height: 0, image: '', secondaryType: '', status: '', weight: 0, id: Date.now(), ...value })
    this.pokemonForm.reset({name: '', passive: '', primaryType:'', region:'' });
  }
}
