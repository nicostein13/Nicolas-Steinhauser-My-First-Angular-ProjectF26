import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokemon} from './shared/model/pokemon';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Nicolas-Steinhauser-Learning-AngularF26');
}


