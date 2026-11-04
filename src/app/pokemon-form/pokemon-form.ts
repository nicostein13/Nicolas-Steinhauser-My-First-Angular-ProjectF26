import {Component, inject, input, OnInit} from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { PokemonService } from '../services/pokemon';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pokemon-form',
  styleUrl: './pokemon-form.css',
  templateUrl: './pokemon-form.html',
})
export class PokemonForm implements OnInit{

  private fb = inject(FormBuilder);

  pokemonForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    passive: ['', Validators.required],
    primaryType: ['', Validators.required],
    region: ['', Validators.required]
  })

  private service = inject(PokemonService);
  private router = inject(Router);

  id = input.required<string>();

  ngOnInit(): void{
    if(this.id()){
      const pokemon = this.service.pokemonList().find(p => p.id === Number(this.id()))
      if(pokemon){
        this.pokemonForm.patchValue(pokemon);
      }
    }
  }
  onSubmit(): void {
    if (this.pokemonForm.invalid) return;
    const value = this.pokemonForm.getRawValue();

    if (this.id()) {
      const pokemon = this.service.pokemonList().find(p => p.id === Number(this.id()));
      this.service.updatePokemon({...pokemon!, ...value});
    } else {
      this.service.addPokemon({
        height: 0,
        image: '',
        secondaryType: '',
        status: 'active',
        weight: 0,
        id: Date.now(), ...value
      });
    }
    this.pokemonForm.reset({name: '', passive: '', primaryType: '', region: ''});
    this.router.navigate(['/pokemon']);
  }
}
