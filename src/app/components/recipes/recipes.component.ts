import { Component, input, output } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
  imports: [RecipeCardComponent],
})
export class RecipesComponent {
  filteredRecipes = input<Recipe[]>([]);
  filteredCount = input<number>(0);
  searchQuery = input<string>('');
  maxPrepTime = input<number>(999);
  maxCookTime = input<number>(999);

  queryChange = output<string>();
  maxPrepTimeChange = output<number>();
  maxCookTimeChange = output<number>();

  readonly timeOptions = [5, 10, 15, 20, 30, 45, 60];

  onSearchInput(event: Event): void {
    this.queryChange.emit((event.target as HTMLInputElement).value);
  }

  onMaxPrepTimeChange(event: Event): void {
    this.maxPrepTimeChange.emit(+(event.target as HTMLSelectElement).value);
  }

  onMaxCookTimeChange(event: Event): void {
    this.maxCookTimeChange.emit(+(event.target as HTMLSelectElement).value);
  }
}
