
import React, { useState, useMemo } from 'react';
import { GeneratedRecipe } from '../types';
import { ArrowLeftIcon, ClockIcon, ChefHatIcon, UsersIcon, CheckCircleIcon, XCircleIcon, SparklesIcon, LeafIcon, MinusIcon, PlusIcon } from './IconComponents';

const ServingsAdjuster: React.FC<{ initialServings: number, onServingsChange: (newServings: number) => void }> = ({ initialServings, onServingsChange }) => {
    const [servings, setServings] = useState(initialServings);

    const adjustServings = (amount: number) => {
        const newServings = Math.max(1, servings + amount);
        setServings(newServings);
        onServingsChange(newServings);
    };

    return (
        <div className="flex items-center gap-4">
            <button onClick={() => adjustServings(-1)} className="bg-primary-light text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors disabled:opacity-50" disabled={servings <= 1}>
                <MinusIcon className="w-5 h-5" />
            </button>
            <span className="text-lg font-bold w-12 text-center">{servings}</span>
            <button onClick={() => adjustServings(1)} className="bg-primary-light text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                <PlusIcon className="w-5 h-5" />
            </button>
        </div>
    );
};


export const RecipeDetail: React.FC<{ recipe: GeneratedRecipe; onBack: () => void; }> = ({ recipe, onBack }) => {
    const [currentServings, setCurrentServings] = useState(recipe.servings);
    const servingMultiplier = useMemo(() => currentServings / recipe.servings, [currentServings, recipe.servings]);

    const adjustIngredientAmount = (amount: string) => {
        const match = amount.match(/^([\d/.\s]+)/);
        if (!match) return amount;

        let numericPart = match[1].trim();
        const textPart = amount.substring(numericPart.length).trim();
        
        let totalValue = 0;
        // Handle fractions like "1 1/2" or "1/2"
        const parts = numericPart.split(/\s+/);
        parts.forEach(part => {
            if (part.includes('/')) {
                const [num, den] = part.split('/').map(Number);
                if (den !== 0) totalValue += num / den;
            } else {
                totalValue += parseFloat(part) || 0;
            }
        });
        
        const adjustedValue = totalValue * servingMultiplier;
        if (isNaN(adjustedValue) || adjustedValue === 0) return amount;

        // Simple formatting, can be improved with a fraction library
        return `${Number(adjustedValue.toFixed(2))} ${textPart}`;
    };
    
    return (
        <div className="animate-fade-in max-w-5xl mx-auto">
            <button onClick={onBack} className="flex items-center gap-2 text-primary font-semibold mb-6 hover:underline">
                <ArrowLeftIcon className="w-5 h-5" />
                Back to Recipes
            </button>
            
            <div className="bg-surface rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2">
                        <img src={recipe.image} alt={recipe.name} className="w-full h-64 md:h-full object-cover"/>
                    </div>
                    <div className="md:col-span-3 p-6 md:p-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-3">{recipe.name}</h1>
                        <p className="text-text-secondary mb-6">{recipe.description}</p>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-4 text-text-secondary mb-6">
                            <div className="flex items-center gap-2"><ClockIcon className="w-5 h-5 text-primary"/> Prep: {recipe.prepTime} min</div>
                            <div className="flex items-center gap-2"><ClockIcon className="w-5 h-5 text-primary"/> Cook: {recipe.cookTime} min</div>
                            <div className="flex items-center gap-2"><ChefHatIcon className="w-5 h-5 text-primary"/> {recipe.difficulty}</div>
                            <div className="flex items-center gap-2"><UsersIcon className="w-5 h-5 text-primary"/> Serves {recipe.servings}</div>
                        </div>

                         <div className="flex flex-wrap gap-2 mb-8">
                            {recipe.dietary.isVegetarian && <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Vegetarian</span>}
                            {recipe.dietary.isVegan && <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Vegan</span>}
                            {recipe.dietary.isGlutenFree && <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Gluten-Free</span>}
                        </div>
                    </div>
                </div>

                <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Ingredients Column */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>

                        <div className="flex items-center justify-between bg-primary-light p-2 rounded-lg mb-4">
                            <label className="font-semibold text-primary-dark">Adjust Servings:</label>
                            <ServingsAdjuster initialServings={recipe.servings} onServingsChange={setCurrentServings} />
                        </div>

                        <h3 className="font-semibold flex items-center gap-2 mb-2 text-green-600"><CheckCircleIcon className="w-5 h-5"/> You Have:</h3>
                        <ul className="list-disc list-inside mb-4 text-sm text-text-secondary">
                            {recipe.matchInfo.userHasIngredients.map(ing => <li key={ing}>{ing}</li>)}
                        </ul>

                        <h3 className="font-semibold flex items-center gap-2 mb-2 text-amber-600"><XCircleIcon className="w-5 h-5"/> You Need:</h3>
                         <ul className="text-sm text-text-secondary">
                            {recipe.ingredients.filter(ing => recipe.matchInfo.userNeedsIngredients.includes(ing.name))
                                .map(ing => (
                                <li key={ing.name} className="mb-1">
                                    <span className="font-bold">{adjustIngredientAmount(ing.amount)}</span> {ing.name}
                                </li>
                            ))}
                        </ul>
                        
                        {recipe.matchInfo.substitutions.length > 0 && (
                          <>
                            <h3 className="font-semibold flex items-center gap-2 mt-6 mb-2 text-indigo-600"><SparklesIcon className="w-5 h-5"/> Substitution Ideas:</h3>
                            <ul className="space-y-2 text-sm text-text-secondary">
                                {recipe.matchInfo.substitutions.map(sub => (
                                    <li key={sub.original}><span className="font-bold">{sub.original}:</span> {sub.substitutes.join(' or ')}</li>
                                ))}
                            </ul>
                          </>
                        )}
                    </div>

                    {/* Instructions Column */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                        <ol className="space-y-4">
                            {recipe.instructions.map((step, index) => (
                                <li key={index} className="flex gap-4">
                                    <span className="flex-shrink-0 bg-primary text-white rounded-full h-8 w-8 flex items-center justify-center font-bold">{index + 1}</span>
                                    <p className="pt-1 text-text-secondary">{step}</p>
                                </li>
                            ))}
                        </ol>

                        <div className="mt-8 bg-primary-light p-4 rounded-lg">
                            <h3 className="font-bold text-lg text-primary-dark mb-2">Nutritional Information</h3>
                            <p className="text-sm text-text-secondary">Estimated values per serving:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 text-center">
                                <div><span className="font-bold text-primary-dark">{recipe.nutritionalInfo.calories}</span><p className="text-xs">Calories</p></div>
                                <div><span className="font-bold text-primary-dark">{recipe.nutritionalInfo.protein}g</span><p className="text-xs">Protein</p></div>
                                <div><span className="font-bold text-primary-dark">{recipe.nutritionalInfo.carbs}g</span><p className="text-xs">Carbs</p></div>
                                <div><span className="font-bold text-primary-dark">{recipe.nutritionalInfo.fat}g</span><p className="text-xs">Fat</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
   