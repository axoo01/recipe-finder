import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrollToRecipes(event?: Event): void {
    event?.preventDefault();
    document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });
  }
}
