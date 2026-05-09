import { Component, input, output } from '@angular/core';
import { AppView } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentView = input<AppView>('home');

  homeClick = output<void>();
  aboutClick = output<void>();
  recipesClick = output<void>();
}
