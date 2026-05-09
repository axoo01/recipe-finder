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

export type AppView = 'home' | 'recipes';

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
  readonly currentView = signal<AppView>('home');

  readonly recipes = signal<Recipe[]>(RECIPES);
  readonly searchQuery = signal('');
  readonly maxPrepTime = signal(999);
  readonly maxCookTime = signal(999);

  readonly filteredRecipes = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const maxPrep = this.maxPrepTime();
    const maxCook = this.maxCookTime();

    return this.recipes().filter((recipe) => {
      if (recipe.prepMinutes > maxPrep) return false;
      if (recipe.cookMinutes > maxCook) return false;
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
      console.log(`[View] currentView="${this.currentView()}"`);
    });

    effect(() => {
      console.log(
        `[Filters] query="${this.searchQuery()}" maxPrep=${this.maxPrepTime()}min maxCook=${this.maxCookTime()}min → ${this.filteredCount()} result(s)`
      );
    });
  }

  showHome(): void {
    this.currentView.set('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showRecipes(): void {
    this.currentView.set('recipes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
