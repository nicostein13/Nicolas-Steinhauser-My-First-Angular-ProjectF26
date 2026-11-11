import {Service, signal} from '@angular/core';

@Service()
export class ErrorService {
  message = signal<string | null>(null);

  set(msg: string): void{
    this.message.set(msg);
  }

  clear(): void{
    this.message.set(null);
  }
}
