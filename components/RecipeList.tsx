
import React from 'react';
import { GeneratedRecipe, FilterState, Difficulty, Dietary } from '../types';
import { ClockIcon, ChefHatIcon, CheckCircleIcon, XCircleIcon, LeafIcon, FilterIcon, TagIcon } from './IconComponents';

interface RecipeCardProps {
  recipe: GeneratedRecipe;
  onSelectRecipe: (recipe: GeneratedRecipe) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onSelectRecipe }) => {
    return (
        <div 
            className="bg-surface rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
            onClick={() => onSelectRecipe(recipe)}
        >
            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-primary mb-2 truncate">{recipe.name}</h3>
                <p className="text-text-secondary text-sm mb-4 flex-grow">{recipe.description}</p>

                <div className="mb-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: `${recipe.matchInfo.matchPercentage}%` }}></div>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-1 text-center">{recipe.matchInfo.matchPercentage}% Ingredient Match</p>
                </div>

                <div className="flex justify-between items-center text-sm text-text-secondary mt-auto border-t pt-3">
                    <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <ChefHatIcon className="w-4 h-4" />
                        <span>{recipe.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface FilterPanelProps {
    filters: FilterState;
    setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, setFilters }) => {
    const difficulties: (Difficulty | 'Any')[] = ['Any', 'Easy', 'Medium', 'Hard'];
    const dietaryOptions: Dietary[] = ['vegetarian', 'vegan', 'gluten-free'];
    
    const handleDietaryChange = (option: Dietary) => {
        setFilters(prev => ({
            ...prev,
            dietary: prev.dietary.includes(option) 
                ? prev.dietary.filter(d => d !== option)
                : [...prev.dietary, option]
        }));
    };

    return (
        <div className="bg-surface p-4 rounded-lg shadow-md mb-8">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4"><FilterIcon className="w-5 h-5"/>Filters</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Dietary Options</label>
                    <div className="flex flex-wrap gap-2">
                        {dietaryOptions.map(option => (
                            <button key={option} onClick={() => handleDietaryChange(option)}
                                className={`px-3 py-1 text-sm rounded-full border transition-colors ${filters.dietary.includes(option) ? 'bg-primary text-white border-primary' : 'bg-transparent text-text-secondary border-gray-300 hover:border-primary'}`}>
                                {option.charAt(0).toUpperCase() + option.slice(1).replace('-', ' ')}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Difficulty</label>
                    <select value={filters.difficulty} onChange={(e) => setFilters(f => ({...f, difficulty: e.target.value as Difficulty | 'Any'}))}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary">
                        {difficulties.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                </div>
                <div>
                    <label htmlFor="cookTime" className="block text-sm font-medium text-text-secondary mb-2">Max Cook Time: {filters.maxCookTime} min</label>
                    <input type="range" id="cookTime" min="10" max="120" step="5" value={filters.maxCookTime}
                        onChange={(e) => setFilters(f => ({...f, maxCookTime: parseInt(e.target.value)}))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                </div>
            </div>
        </div>
    );
};


interface RecipeListProps {
  recipes: GeneratedRecipe[];
  onSelectRecipe: (recipe: GeneratedRecipe) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  originalCount: number;
}

export const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe, filters, setFilters, originalCount }) => {
  return (
    <div className="animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-4">We found some delicious options!</h2>
        <p className="text-center text-text-secondary mb-8">
          Showing {recipes.length} of {originalCount} recipes. Click a card to see the full details.
        </p>

        <FilterPanel filters={filters} setFilters={setFilters} />
      
        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} onSelectRecipe={onSelectRecipe} />
              ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <TagIcon className="w-16 h-16 mx-auto text-gray-300"/>
            <h3 className="text-xl font-semibold mt-4">No Recipes Match Your Filters</h3>
            <p className="text-text-secondary mt-2">Try adjusting your filters to find more recipes.</p>
          </div>
        )}
    </div>
  );
};
   