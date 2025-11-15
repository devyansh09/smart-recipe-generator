
import React, { useState, useMemo, useCallback } from 'react';
import { Header } from './components/Header';
import { IngredientInput } from './components/IngredientInput';
import { RecipeList } from './components/RecipeList';
import { RecipeDetail } from './components/RecipeDetail';
import { GeneratedRecipe, FilterState, Dietary } from './types';
import { generateRecipesFromIngredients } from './services/geminiService';
import { Spinner } from './components/Spinner';

const App: React.FC = () => {
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [textIngredients, setTextIngredients] = useState<string>('');
  const [generatedRecipes, setGeneratedRecipes] = useState<GeneratedRecipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<GeneratedRecipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [filters, setFilters] = useState<FilterState>({
    dietary: [],
    difficulty: 'Any',
    maxCookTime: 120,
  });
  
  const handleGenerate = async () => {
    if (imageFiles.length === 0 && textIngredients.trim() === '') {
      setError('Please add at least one ingredient image or type some ingredients.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedRecipes([]);
    setSelectedRecipe(null);

    try {
      const recipes = await generateRecipesFromIngredients(imageFiles, textIngredients.split(',').map(s => s.trim()).filter(Boolean), filters);
      setGeneratedRecipes(recipes);
    } catch (err) {
      console.error(err);
      setError('Sorry, we couldn\'t generate recipes at this time. The model might be busy. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectRecipe = useCallback((recipe: GeneratedRecipe) => {
    setSelectedRecipe(recipe);
    window.scrollTo(0, 0);
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedRecipe(null);
  }, []);

  const filteredRecipes = useMemo(() => {
    return generatedRecipes.filter(recipe => {
      const dietaryMatch = filters.dietary.every(d => {
        if (d === 'vegetarian' && !recipe.dietary.isVegetarian) return false;
        if (d === 'vegan' && !recipe.dietary.isVegan) return false;
        if (d === 'gluten-free' && !recipe.dietary.isGlutenFree) return false;
        return true;
      });

      const difficultyMatch = filters.difficulty === 'Any' || recipe.difficulty === filters.difficulty;
      const cookTimeMatch = recipe.cookTime <= filters.maxCookTime;

      return dietaryMatch && difficultyMatch && cookTimeMatch;
    });
  }, [generatedRecipes, filters]);

  const resetApp = () => {
    setImageFiles([]);
    setTextIngredients('');
    setGeneratedRecipes([]);
    setSelectedRecipe(null);
    setIsLoading(false);
    setError(null);
    setFilters({
      dietary: [],
      difficulty: 'Any',
      maxCookTime: 120,
    });
  }

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans">
      <Header onLogoClick={resetApp} />
      <main className="container mx-auto p-4 md:p-8">
        {isLoading && <Spinner message="Analyzing ingredients and finding the best recipes for you..." />}
        
        {!isLoading && error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-center" role="alert">
            <strong className="font-bold">Oops! </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!isLoading && !error && generatedRecipes.length === 0 && (
          <IngredientInput
            imageFiles={imageFiles}
            setImageFiles={setImageFiles}
            textIngredients={textIngredients}
            setTextIngredients={setTextIngredients}
            onGenerate={handleGenerate}
          />
        )}
        
        {!isLoading && !error && generatedRecipes.length > 0 && !selectedRecipe && (
          <RecipeList 
            recipes={filteredRecipes} 
            onSelectRecipe={handleSelectRecipe}
            filters={filters}
            setFilters={setFilters}
            originalCount={generatedRecipes.length}
          />
        )}
        
        {!isLoading && !error && selectedRecipe && (
          <RecipeDetail recipe={selectedRecipe} onBack={handleBackToList} />
        )}
      </main>
    </div>
  );
};

export default App;
   