export interface RecipeImage {
  large: string;
  small: string;
}

export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: RecipeImage;
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
}
