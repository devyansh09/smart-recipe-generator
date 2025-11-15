export const generateRecipesFromIngredients = async (
  imageFiles: File[],
  textIngredients: string[],
  filters: any
) => {
  // Simulate small delay for realism
  await new Promise((res) => setTimeout(res, 800));

  const userIngredients = textIngredients.map((i) => i.toLowerCase());

  // Helper to calculate match %
  const calcMatch = (recipeIngredients: string[]) => {
    const matched = recipeIngredients.filter((r) =>
      userIngredients.includes(r.toLowerCase())
    );
    const matchPct = Math.round((matched.length / recipeIngredients.length) * 100);

    return {
      matchPercentage: matchPct,
      userHasIngredients: matched,
      userNeedsIngredients: recipeIngredients.filter(
        (r) => !userIngredients.includes(r.toLowerCase())
      ),
    };
  };

  // 🔥 20 MOCK RECIPES
  const recipes = [
    {
      id: 1,
      name: "Tomato Basil Pasta",
      description: "A classic Italian pasta tossed in tomato and basil.",
      image: "",
      prepTime: 10,
      cookTime: 15,
      servings: 2,
      difficulty: "Easy",
      ingredients: [
        { name: "pasta", amount: "200g" },
        { name: "tomato", amount: "2 pcs" },
        { name: "basil", amount: "5 leaves" },
        { name: "olive oil", amount: "1 tbsp" }
      ],
      instructions: ["Boil pasta", "Cook tomatoes", "Mix and serve"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 460, protein: 12, carbs: 68, fat: 10 }
    },

    {
      id: 2,
      name: "Creamy Mushroom Soup",
      description: "A comforting warm mushroom soup.",
      image: "",
      prepTime: 5,
      cookTime: 20,
      servings: 3,
      difficulty: "Easy",
      ingredients: [
        { name: "mushroom", amount: "200g" },
        { name: "milk", amount: "1 cup" },
        { name: "onion", amount: "1 small" },
        { name: "garlic", amount: "2 cloves" }
      ],
      instructions: ["Sauté mushrooms", "Blend", "Simmer with milk"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true },
      nutritionalInfo: { calories: 320, protein: 8, carbs: 25, fat: 12 }
    },

    {
      id: 3,
      name: "Veg Fried Rice",
      description: "Simple wok-fried rice with veggies.",
      prepTime: 10,
      cookTime: 10,
      servings: 2,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "rice", amount: "2 cups" },
        { name: "carrot", amount: "1" },
        { name: "peas", amount: "1/4 cup" },
        { name: "soy sauce", amount: "1 tbsp" }
      ],
      instructions: ["Stir-fry veggies", "Add rice & sauce", "Serve hot"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: false },
      nutritionalInfo: { calories: 510, protein: 10, carbs: 85, fat: 9 }
    },

    {
      id: 4,
      name: "Omelette",
      description: "Quick protein-rich fluffy omelette.",
      prepTime: 2,
      cookTime: 3,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "egg", amount: "2" },
        { name: "onion", amount: "1 tbsp chopped" },
        { name: "tomato", amount: "1 tbsp chopped" },
        { name: "salt", amount: "to taste" }
      ],
      instructions: ["Beat eggs", "Cook in pan", "Fold and serve"],
      dietary: { isVegetarian: false, isVegan: false, isGlutenFree: true },
      nutritionalInfo: { calories: 210, protein: 14, carbs: 3, fat: 15 }
    },

    {
      id: 5,
      name: "Chickpea Salad",
      description: "Healthy vegan salad loaded with fiber.",
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "chickpeas", amount: "1 cup" },
        { name: "cucumber", amount: "1/2 pcs" },
        { name: "tomato", amount: "1" },
        { name: "lemon", amount: "1 tbsp juice" }
      ],
      instructions: ["Mix ingredients", "Add dressing", "Serve fresh"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: true },
      nutritionalInfo: { calories: 280, protein: 12, carbs: 45, fat: 3 }
    },

    {
      id: 6,
      name: "Masala Maggi",
      description: "Indian-style instant noodles.",
      prepTime: 2,
      cookTime: 5,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "maggi noodles", amount: "1 packet" },
        { name: "capsicum", amount: "2 tbsp" },
        { name: "tomato", amount: "1/2" }
      ],
      instructions: ["Boil noodles", "Add veggies", "Add taste-maker"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 380, protein: 7, carbs: 52, fat: 15 }
    },

    {
      id: 7,
      name: "Avocado Toast",
      description: "Healthy breakfast toast.",
      prepTime: 5,
      cookTime: 1,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "bread", amount: "2 slices" },
        { name: "avocado", amount: "1/2" },
        { name: "lemon", amount: "1 tsp" }
      ],
      instructions: ["Toast bread", "Mash avocado", "Spread on toast"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: false },
      nutritionalInfo: { calories: 300, protein: 6, carbs: 32, fat: 15 }
    },

    {
      id: 8,
      name: "Paneer Butter Masala",
      description: "Rich creamy paneer gravy.",
      prepTime: 10,
      cookTime: 20,
      servings: 2,
      difficulty: "Medium",
      image: "",
      ingredients: [
        { name: "paneer", amount: "200g" },
        { name: "tomato", amount: "2" },
        { name: "cream", amount: "2 tbsp" },
        { name: "spices", amount: "1 tsp" }
      ],
      instructions: ["Make gravy", "Add paneer", "Simmer"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true },
      nutritionalInfo: { calories: 600, protein: 18, carbs: 20, fat: 45 }
    },

    {
      id: 9,
      name: "Garlic Butter Rice",
      description: "Aromatic buttery rice.",
      prepTime: 5,
      cookTime: 10,
      servings: 2,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "rice", amount: "2 cups" },
        { name: "garlic", amount: "4 cloves" },
        { name: "butter", amount: "1 tbsp" }
      ],
      instructions: ["Cook rice", "Fry garlic in butter", "Mix"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true },
      nutritionalInfo: { calories: 480, protein: 9, carbs: 90, fat: 8 }
    },

    {
      id: 10,
      name: "Chicken Curry",
      description: "Spicy Indian chicken curry.",
      prepTime: 15,
      cookTime: 25,
      servings: 3,
      difficulty: "Medium",
      image: "",
      ingredients: [
        { name: "chicken", amount: "250g" },
        { name: "onion", amount: "1" },
        { name: "tomato", amount: "2" },
        { name: "spices", amount: "1 tbsp" }
      ],
      instructions: ["Cook onions", "Add chicken & spices", "Simmer"],
      dietary: { isVegetarian: false, isVegan: false, isGlutenFree: true },
      nutritionalInfo: { calories: 540, protein: 32, carbs: 10, fat: 40 }
    },

    // ---- NEXT 10 RECIPES BELOW ----

    {
      id: 11,
      name: "Fruit Yogurt Bowl",
      description: "A refreshing sweet breakfast bowl.",
      prepTime: 5,
      cookTime: 0,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "yogurt", amount: "1 cup" },
        { name: "banana", amount: "1" },
        { name: "berries", amount: "1/4 cup" }
      ],
      instructions: ["Slice fruit", "Mix with yogurt", "Serve"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true },
      nutritionalInfo: { calories: 250, protein: 6, carbs: 40, fat: 5 }
    },

    {
      id: 12,
      name: "Garlic Naan",
      description: "Soft, fluffy naan flavored with garlic.",
      prepTime: 15,
      cookTime: 10,
      servings: 4,
      difficulty: "Medium",
      image: "",
      ingredients: [
        { name: "flour", amount: "2 cups" },
        { name: "garlic", amount: "3 cloves" },
        { name: "yogurt", amount: "2 tbsp" }
      ],
      instructions: ["Knead dough", "Cook on tawa", "Brush with garlic butter"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 310, protein: 8, carbs: 50, fat: 8 }
    },

    {
      id: 13,
      name: "Simple Roti",
      description: "Whole-wheat homemade roti.",
      prepTime: 10,
      cookTime: 5,
      servings: 3,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "atta", amount: "2 cups" },
        { name: "water", amount: "1 cup" }
      ],
      instructions: ["Knead dough", "Roll", "Cook on tawa"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: false },
      nutritionalInfo: { calories: 200, protein: 6, carbs: 40, fat: 1 }
    },

    {
      id: 14,
      name: "French Toast",
      description: "Golden, crispy French toast.",
      prepTime: 5,
      cookTime: 5,
      servings: 2,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "bread", amount: "4 slices" },
        { name: "egg", amount: "2" },
        { name: "milk", amount: "1/2 cup" }
      ],
      instructions: ["Dip bread", "Cook on pan", "Serve"],
      dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 380, protein: 12, carbs: 48, fat: 12 }
    },

    {
      id: 15,
      name: "Veg Sandwich",
      description: "Fresh vegetables sandwiched between toasted bread.",
      prepTime: 5,
      cookTime: 2,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "bread", amount: "2 slices" },
        { name: "cucumber", amount: "4 slices" },
        { name: "tomato", amount: "2 slices" },
        { name: "lettuce", amount: "1 leaf" }
      ],
      instructions: ["Toast bread", "Layer veggies", "Serve"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: false },
      nutritionalInfo: { calories: 220, protein: 5, carbs: 32, fat: 4 }
    },

    {
      id: 16,
      name: "Grilled Cheese",
      description: "Golden, melty grilled cheese sandwich.",
      prepTime: 3,
      cookTime: 3,
      servings: 1,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "bread", amount: "2 slices" },
        { name: "cheese", amount: "2 slices" },
        { name: "butter", amount: "1 tsp" }
      ],
      instructions: ["Butter bread", "Add cheese", "Grill"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 330, protein: 9, carbs: 26, fat: 20 }
    },

    {
      id: 17,
      name: "Pancakes",
      description: "Fluffy homemade pancakes.",
      prepTime: 10,
      cookTime: 5,
      servings: 2,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "flour", amount: "1 cup" },
        { name: "milk", amount: "1 cup" },
        { name: "egg", amount: "1" }
      ],
      instructions: ["Mix batter", "Cook on skillet", "Serve"],
      dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 350, protein: 8, carbs: 58, fat: 8 }
    },

    {
      id: 18,
      name: "Aloo Paratha",
      description: "Stuffed potato flatbread.",
      prepTime: 20,
      cookTime: 10,
      servings: 2,
      difficulty: "Medium",
      image: "",
      ingredients: [
        { name: "atta", amount: "2 cups" },
        { name: "potato", amount: "2 boiled" },
        { name: "spices", amount: "1 tsp" }
      ],
      instructions: ["Make filling", "Stuff inside dough", "Cook"],
      dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false },
      nutritionalInfo: { calories: 420, protein: 9, carbs: 70, fat: 10 }
    },

    {
      id: 19,
      name: "Lemon Rice",
      description: "South Indian rice with lemon and spices.",
      prepTime: 5,
      cookTime: 8,
      servings: 2,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "rice", amount: "2 cups" },
        { name: "lemon", amount: "1 tbsp juice" },
        { name: "peanuts", amount: "2 tbsp" }
      ],
      instructions: ["Cook rice", "Mix lemon & spices", "Add peanuts"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: true },
      nutritionalInfo: { calories: 450, protein: 8, carbs: 78, fat: 8 }
    },

    {
      id: 20,
      name: "Dal Tadka",
      description: "Flavorful lentils tempered with spices.",
      prepTime: 10,
      cookTime: 20,
      servings: 3,
      difficulty: "Easy",
      image: "",
      ingredients: [
        { name: "dal", amount: "1 cup" },
        { name: "onion", amount: "1" },
        { name: "tomato", amount: "1" },
        { name: "spices", amount: "1 tsp" }
      ],
      instructions: ["Boil dal", "Make tadka", "Mix"],
      dietary: { isVegetarian: true, isVegan: true, isGlutenFree: true },
      nutritionalInfo: { calories: 300, protein: 15, carbs: 40, fat: 5 }
    }
  ];

  // Add matchInfo dynamically
  return recipes.map((r) => {
    const recipeIngredientNames = r.ingredients.map((ing) => ing.name);
    const match = calcMatch(recipeIngredientNames);

    return {
      ...r,
      matchInfo: {
        ...match,
        substitutions: match.userNeedsIngredients.map((i) => ({
          original: i,
          substitutes: ["option1", "option2"]
        }))
      }
    };
  });
};
