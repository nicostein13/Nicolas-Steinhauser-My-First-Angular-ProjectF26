import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Guard } from '../guard';
import {LoadingService} from '../services/loading-service';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  guardService = inject(Guard);
  private loadingService = inject(LoadingService);
  isLoading = this.loadingService.isLoading
}
