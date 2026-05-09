import { Component } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.scss',
})
export class CtaComponent {
  scrollToRecipes(): void {
    document.getElementById('recipes')?.scrollIntoView({ behavior: 'smooth' });
  }
}
