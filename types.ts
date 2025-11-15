
export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Dietary = 'vegetarian' | 'vegan' | 'gluten-free';

export interface FilterState {
  dietary: Dietary[];
  difficulty: Difficulty | 'Any';
  maxCookTime: number; // in minutes
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface IngredientSubstitution {
  original: string;
  substitutes: string[];
}

export interface GeneratedRecipe {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  difficulty: Difficulty;
  ingredients: { name: string; amount: string; }[];
  instructions: string[];
  dietary: {
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
  };
  matchInfo: {
    matchPercentage: number;
    userHasIngredients: string[];
    userNeedsIngredients: string[];
    substitutions: IngredientSubstitution[];
  };
  nutritionalInfo: NutritionalInfo;
}

export interface BaseRecipe {
  id: number;
  name: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: Difficulty;
  ingredients: { name: string; amount: string; }[];
  instructions: string[];
  dietary: {
    isVegetarian: boolean;
    isVegan: boolean;
    isGlutenFree: boolean;
  };
}
   