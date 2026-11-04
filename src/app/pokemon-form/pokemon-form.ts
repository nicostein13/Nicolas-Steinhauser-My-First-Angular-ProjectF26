import {Component, inject, input, OnInit} from '@angular/core';
import {ReactiveFormsModule, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { PokemonService } from '../services/pokemon';
import { Router } from '@angular/router';

export function capitalizedValidator(control: AbstractControl){
  const value: string = control.value;

  if(value !== '' && value[0] !== value[0].toUpperCase()){
   return { notCapitalized: true };
  }
  return null;
}

export function differentTypesValidator(group: AbstractControl){
  const primary = group.get('primaryType')?.value;
  const secondary = group.get('secondaryType')?.value;

  if(primary !== '' && primary === secondary){
    return { sameTypes: true };
  }
  return null;
}

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pokemon-form',
  styleUrl: './pokemon-form.css',
  templateUrl: './pokemon-form.html',
})
export class PokemonForm implements OnInit{

  private fb = inject(FormBuilder);

  pokemonForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), capitalizedValidator]],
    passive: ['', Validators.required],
    primaryType: ['', Validators.required],
    secondaryType: [''],
    region: ['', Validators.required]
  },
    { validators: differentTypesValidator }
    )

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
        status: 'active',
        weight: 0,
        id: Date.now(), ...value
      });
    }
    this.pokemonForm.reset({name: '', passive: '', primaryType: '', secondaryType: '', region: ''});
    this.router.navigate(['/pokemon']);
  }
}
