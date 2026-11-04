import {Service, signal} from '@angular/core';

@Service()
export class Guard {
  guardEnabled= signal(true);

  toggle(): void{
    this.guardEnabled.update(value => !value);
  }
}
