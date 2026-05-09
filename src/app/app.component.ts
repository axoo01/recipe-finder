import { Component, computed, effect, signal } from '@angular/core';
import { RECIPES } from './data/recipes.data';
import { Recipe } from './models/recipe.model';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { RealLifeComponent } from './components/real-life/real-life.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    RealLifeComponent,
    RecipesComponent,
    CtaComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  readonly recipes = signal<Recipe[]>(RECIPES);
  readonly searchQuery = signal('');
  readonly maxTime = signal(60);

  readonly filteredRecipes = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const limit = this.maxTime();

    return this.recipes().filter((recipe) => {
      const totalTime = recipe.prepMinutes + recipe.cookMinutes;
      const withinTime = totalTime <= limit;

      if (!withinTime) return false;
      if (!query) return true;

      const matchesTitle = recipe.title.toLowerCase().includes(query);
      const matchesIngredient = recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(query)
      );

      return matchesTitle || matchesIngredient;
    });
  });

  readonly filteredCount = computed(() => this.filteredRecipes().length);

  constructor() {
    effect(() => {
      console.log(
        `[Filters] query="${this.searchQuery()}" maxTime=${this.maxTime()}min → ${this.filteredCount()} result(s)`
      );
    });
  }
}
