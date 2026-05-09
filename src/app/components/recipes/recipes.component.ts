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
  maxTime = input<number>(60);

  queryChange = output<string>();
  maxTimeChange = output<number>();

  onSearchInput(event: Event): void {
    this.queryChange.emit((event.target as HTMLInputElement).value);
  }

  onMaxTimeInput(event: Event): void {
    this.maxTimeChange.emit(+(event.target as HTMLInputElement).value);
  }
}
