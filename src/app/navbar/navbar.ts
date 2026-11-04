import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Guard } from '../guard';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  guardService = inject(Guard);
}
