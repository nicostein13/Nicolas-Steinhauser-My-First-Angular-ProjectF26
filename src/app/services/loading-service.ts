import {computed, Service, signal} from '@angular/core';

@Service()
export class LoadingService {
  private count = signal(0);

  isLoading = computed(() => this.count() > 0);

  increase(): void{
    this.count.update(c => c + 1);
  }

  decrease(): void{
    this.count.update(c => Math.max(0, c - 1));
  }
}
