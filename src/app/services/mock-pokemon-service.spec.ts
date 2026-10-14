import { TestBed } from '@angular/core/testing';
import { MockPokemonService } from './mock-pokemon-service';

describe('MockPokemonService', () => {
  let service: MockPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
