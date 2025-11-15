
import { BaseRecipe } from '../types';

export const RECIPES_DB: BaseRecipe[] = [
  {
    id: 1,
    name: 'Classic Spaghetti Carbonara',
    description: 'A classic Roman pasta dish made with eggs, cheese, pancetta, and pepper.',
    image: 'https://picsum.photos/seed/carbonara/800/600',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      { name: 'Spaghetti', amount: '400g' },
      { name: 'Pancetta or Guanciale', amount: '150g, diced' },
      { name: 'Large eggs', amount: '4' },
      { name: 'Pecorino Romano cheese', amount: '100g, freshly grated' },
      { name: 'Black pepper', amount: 'to taste' },
      { name: 'Salt', amount: 'to taste' }
    ],
    instructions: [
      'Cook spaghetti according to package directions. Reserve 1 cup of pasta water.',
      'While pasta cooks, fry pancetta in a large skillet over medium heat until crisp.',
      'In a bowl, whisk eggs and Pecorino cheese. Season with black pepper.',
      'Drain the pasta and add it to the skillet with the pancetta. Toss to combine.',
      'Remove from heat. Slowly pour in the egg mixture, stirring quickly to create a creamy sauce. Add pasta water as needed to thin the sauce.',
      'Serve immediately with more grated cheese and black pepper.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false }
  },
  {
    id: 2,
    name: 'Vegetarian Lentil Soup',
    description: 'A hearty and nutritious soup packed with vegetables and lentils.',
    image: 'https://picsum.photos/seed/lentilsoup/800/600',
    prepTime: 15,
    cookTime: 45,
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
      { name: 'Olive oil', amount: '2 tbsp' },
      { name: 'Onion', amount: '1, chopped' },
      { name: 'Carrots', amount: '2, diced' },
      { name: 'Celery stalks', amount: '2, diced' },
      { name: 'Garlic', amount: '3 cloves, minced' },
      { name: 'Brown or green lentils', amount: '1 1/2 cups, rinsed' },
      { name: 'Diced tomatoes', amount: '1 can (14.5 oz)' },
      { name: 'Vegetable broth', amount: '8 cups' },
      { name: 'Thyme', amount: '1 tsp' },
      { name: 'Bay leaf', amount: '1' },
      { name: 'Spinach', amount: '2 cups, fresh' },
      { name: 'Lemon juice', amount: '1 tbsp' }
    ],
    instructions: [
      'Heat olive oil in a large pot over medium heat. Add onion, carrots, and celery and cook until softened.',
      'Stir in garlic and cook for another minute.',
      'Add lentils, diced tomatoes, vegetable broth, thyme, and bay leaf. Bring to a boil, then reduce heat and simmer for 40-45 minutes, until lentils are tender.',
      'Remove the bay leaf. Stir in spinach and lemon juice. Cook until spinach is wilted.',
      'Season with salt and pepper to taste.'
    ],
    dietary: { isVegetarian: true, isVegan: true, isGlutenFree: true }
  },
  {
    id: 3,
    name: 'Gluten-Free Chicken Piccata',
    description: 'A zesty and savory chicken dish with lemon and capers, made gluten-free.',
    image: 'https://picsum.photos/seed/chickenpiccata/800/600',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      { name: 'Chicken breasts', amount: '4 thin-sliced' },
      { name: 'Gluten-free all-purpose flour', amount: '1/2 cup' },
      { name: 'Salt and pepper', amount: 'to taste' },
      { name: 'Butter', amount: '4 tbsp' },
      { name: 'Olive oil', amount: '2 tbsp' },
      { name: 'Chicken broth', amount: '1/2 cup' },
      { name: 'Lemon juice', amount: '1/4 cup, fresh' },
      { name: 'Capers', amount: '2 tbsp, drained' },
      { name: 'Fresh parsley', amount: '2 tbsp, chopped' }
    ],
    instructions: [
      'Season gluten-free flour with salt and pepper. Dredge chicken breasts in the flour.',
      'In a large skillet, heat 2 tbsp butter and 2 tbsp olive oil over medium-high heat.',
      'Cook chicken for 3-4 minutes per side, until golden brown and cooked through. Remove to a plate.',
      'Reduce heat to medium. Add chicken broth and lemon juice to the skillet, scraping up any browned bits.',
      'Bring to a simmer and cook for 2 minutes. Stir in the remaining 2 tbsp butter, capers, and parsley.',
      'Return chicken to the skillet and spoon the sauce over it. Serve immediately.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: true }
  },
  {
    id: 4,
    name: 'Avocado Toast with Egg',
    description: 'A simple, satisfying, and trendy breakfast or light meal.',
    image: 'https://picsum.photos/seed/avocadotoast/800/600',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    difficulty: 'Easy',
    ingredients: [
      { name: 'Bread', amount: '1 slice' },
      { name: 'Avocado', amount: '1/2, ripe' },
      { name: 'Egg', amount: '1' },
      { name: 'Lemon juice', amount: 'a squeeze' },
      { name: 'Red pepper flakes', amount: 'a pinch' },
      { name: 'Salt and pepper', amount: 'to taste' }
    ],
    instructions: [
      'Toast the slice of bread to your desired crispness.',
      'While the bread is toasting, mash the avocado in a small bowl with a fork. Mix in a squeeze of lemon juice, salt, and pepper.',
      'Cook the egg to your preference (fried, poached, or scrambled).',
      'Spread the mashed avocado evenly on the toast.',
      'Top with the cooked egg. Sprinkle with red pepper flakes and serve immediately.'
    ],
    dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false }
  },
  {
    id: 5,
    name: 'Quick Chicken Stir-Fry',
    description: 'A versatile and fast stir-fry that\'s perfect for a weeknight dinner.',
    image: 'https://picsum.photos/seed/stirfry/800/600',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      { name: 'Chicken breast', amount: '1 lb, cut into bite-sized pieces' },
      { name: 'Soy sauce', amount: '1/4 cup' },
      { name: 'Honey', amount: '2 tbsp' },
      { name: 'Sesame oil', amount: '1 tbsp' },
      { name: 'Cornstarch', amount: '1 tbsp' },
      { name: 'Vegetable oil', amount: '2 tbsp' },
      { name: 'Broccoli florets', amount: '2 cups' },
      { name: 'Bell pepper', amount: '1, sliced' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Ginger', amount: '1 tsp, grated' },
      { name: 'Rice', amount: 'for serving' }
    ],
    instructions: [
      'In a bowl, whisk together soy sauce, honey, sesame oil, and cornstarch. Add the chicken and toss to coat.',
      'Heat vegetable oil in a large skillet or wok over high heat.',
      'Add the chicken and cook until browned and cooked through. Remove from skillet.',
      'Add broccoli and bell pepper to the skillet. Stir-fry for 3-4 minutes until tender-crisp.',
      'Add garlic and ginger and cook for 30 seconds until fragrant.',
      'Return the chicken to the skillet along with any remaining sauce. Toss everything together and cook for 1-2 minutes until the sauce has thickened.',
      'Serve hot over rice.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false }
  },
  {
    id: 6,
    name: 'Vegan Black Bean Burgers',
    description: 'Flavorful and satisfying plant-based burgers that hold together perfectly.',
    image: 'https://picsum.photos/seed/beanburger/800/600',
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      { name: 'Black beans', amount: '1 can (15 oz), rinsed and drained' },
      { name: 'Breadcrumbs', amount: '1/2 cup' },
      { name: 'Onion', amount: '1/2, finely chopped' },
      { name: 'Garlic', amount: '2 cloves, minced' },
      { name: 'Cumin', amount: '1 tsp' },
      { name: 'Chili powder', amount: '1/2 tsp' },
      { name: 'Olive oil', amount: '1 tbsp' },
      { name: 'Burger buns', amount: '4' },
      { name: 'Lettuce, tomato, onion', amount: 'for topping' }
    ],
    instructions: [
      'In a large bowl, mash the black beans with a fork until mostly broken down but still with some texture.',
      'Stir in the breadcrumbs, chopped onion, garlic, cumin, and chili powder. Mix until well combined.',
      'Form the mixture into 4 equal-sized patties.',
      'Heat olive oil in a skillet over medium heat. Cook the patties for 4-5 minutes per side, until browned and firm.',
      'Serve on burger buns with your favorite toppings.'
    ],
    dietary: { isVegetarian: true, isVegan: true, isGlutenFree: false }
  },
  {
    id: 7,
    name: 'Classic Tomato Soup',
    description: 'A creamy and comforting tomato soup, perfect with a grilled cheese sandwich.',
    image: 'https://picsum.photos/seed/tomatosoup/800/600',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Butter', amount: '2 tbsp' },
        { name: 'Onion', amount: '1, chopped' },
        { name: 'Garlic', amount: '2 cloves, minced' },
        { name: 'Crushed tomatoes', amount: '1 can (28 oz)' },
        { name: 'Vegetable broth', amount: '2 cups' },
        { name: 'Heavy cream', amount: '1/2 cup' },
        { name: 'Sugar', amount: '1 tsp (optional)' },
        { name: 'Salt and pepper', amount: 'to taste' },
        { name: 'Fresh basil', amount: 'for garnish' }
    ],
    instructions: [
        'Melt butter in a large pot or Dutch oven over medium heat. Add onion and cook until soft.',
        'Stir in garlic and cook for 1 minute more.',
        'Add crushed tomatoes and vegetable broth. Bring to a simmer and cook for 20 minutes.',
        'Use an immersion blender to blend the soup until smooth. Or, carefully transfer to a regular blender.',
        'Stir in heavy cream and sugar (if using). Season with salt and pepper.',
        'Serve hot, garnished with fresh basil.'
    ],
    dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true }
  },
  {
    id: 8,
    name: 'Sheet Pan Lemon Herb Chicken',
    description: 'An easy and flavorful one-pan meal with chicken and roasted vegetables.',
    image: 'https://picsum.photos/seed/sheetpan/800/600',
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Chicken thighs', amount: '4, bone-in, skin-on' },
        { name: 'Baby potatoes', amount: '1 lb, halved' },
        { name: 'Broccoli florets', amount: '1 head' },
        { name: 'Lemon', amount: '1, sliced' },
        { name: 'Olive oil', amount: '3 tbsp' },
        { name: 'Dried oregano', amount: '1 tsp' },
        { name: 'Dried thyme', amount: '1 tsp' },
        { name: 'Garlic powder', amount: '1 tsp' },
        { name: 'Salt and pepper', amount: 'to taste' }
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'On a large sheet pan, toss potatoes with 1 tbsp olive oil, salt, and pepper. Roast for 15 minutes.',
        'In a bowl, toss chicken and broccoli with remaining olive oil, oregano, thyme, garlic powder, salt, and pepper.',
        'Push potatoes to one side of the pan and add the chicken and broccoli in a single layer.',
        'Arrange lemon slices over the chicken and vegetables.',
        'Roast for 25-30 minutes, or until chicken is cooked through and vegetables are tender.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: true }
  },
  {
    id: 9,
    name: 'Caprese Salad',
    description: 'A simple Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil.',
    image: 'https://picsum.photos/seed/caprese/800/600',
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Tomatoes', amount: '4 large, ripe' },
        { name: 'Fresh mozzarella cheese', amount: '1 lb' },
        { name: 'Fresh basil leaves', amount: '1 large bunch' },
        { name: 'Extra virgin olive oil', amount: 'for drizzling' },
        { name: 'Balsamic glaze', amount: 'for drizzling' },
        { name: 'Salt and freshly ground black pepper', amount: 'to taste' }
    ],
    instructions: [
        'Slice the tomatoes and mozzarella to about 1/4-inch thickness.',
        'Arrange alternating slices of tomato and mozzarella on a platter.',
        'Tuck fresh basil leaves in between the slices.',
        'Drizzle with extra virgin olive oil and balsamic glaze.',
        'Season with salt and pepper just before serving.'
    ],
    dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true }
  },
  {
    id: 10,
    name: 'Simple Fried Rice',
    description: 'A quick and easy way to use up leftover rice and vegetables.',
    image: 'https://picsum.photos/seed/friedrice/800/600',
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Cooked rice', amount: '3 cups, cold' },
        { name: 'Vegetable oil', amount: '2 tbsp' },
        { name: 'Eggs', amount: '2, lightly beaten' },
        { name: 'Onion', amount: '1/2 cup, chopped' },
        { name: 'Carrots and peas', amount: '1 cup, frozen mix' },
        { name: 'Soy sauce', amount: '3 tbsp' },
        { name: 'Sesame oil', amount: '1 tsp' },
        { name: 'Green onions', amount: '2, sliced' }
    ],
    instructions: [
        'Heat 1 tbsp of vegetable oil in a large skillet or wok over medium heat. Add eggs and scramble until cooked. Remove from skillet.',
        'Add the remaining 1 tbsp of oil to the skillet. Add onion and cook until soft.',
        'Add the frozen carrots and peas and cook until tender.',
        'Increase heat to high, add the cold rice to the skillet. Stir-fry for a few minutes, breaking up any clumps.',
        'Stir in the soy sauce and sesame oil. Add the scrambled eggs back to the skillet.',
        'Toss everything to combine and heat through. Garnish with green onions.'
    ],
    dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false }
  },
  {
    id: 11,
    name: 'Beef Tacos',
    description: 'Classic ground beef tacos that are a guaranteed family favorite.',
    image: 'https://picsum.photos/seed/tacos/800/600',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Ground beef', amount: '1 lb' },
        { name: 'Onion', amount: '1, chopped' },
        { name: 'Taco seasoning', amount: '1 packet' },
        { name: 'Water', amount: '1/2 cup' },
        { name: 'Taco shells', amount: '8-10' },
        { name: 'Lettuce', amount: 'shredded' },
        { name: 'Tomatoes', amount: 'diced' },
        { name: 'Cheddar cheese', amount: 'shredded' },
        { name: 'Sour cream', amount: 'optional' },
        { name: 'Salsa', amount: 'optional' }
    ],
    instructions: [
        'In a large skillet, cook ground beef and onion over medium-high heat until beef is browned. Drain fat.',
        'Stir in taco seasoning and water. Bring to a simmer and cook for 5 minutes, until the sauce has thickened.',
        'Warm taco shells according to package directions.',
        'Fill shells with the beef mixture.',
        'Top with lettuce, tomatoes, cheese, and other desired toppings like sour cream and salsa.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: true }
  },
  {
    id: 12,
    name: 'Quinoa Salad with Lemon Vinaigrette',
    description: 'A light, refreshing, and protein-packed salad.',
    image: 'https://picsum.photos/seed/quinoasalad/800/600',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Quinoa', amount: '1 cup, uncooked' },
        { name: 'Water or vegetable broth', amount: '2 cups' },
        { name: 'Cucumber', amount: '1, diced' },
        { name: 'Cherry tomatoes', amount: '1 cup, halved' },
        { name: 'Red onion', amount: '1/4 cup, finely diced' },
        { name: 'Chickpeas', amount: '1 can (15 oz), rinsed' },
        { name: 'Fresh parsley', amount: '1/2 cup, chopped' },
        { name: 'Feta cheese', amount: '1/2 cup, crumbled (optional)' },
        { name: 'Olive oil', amount: '1/4 cup' },
        { name: 'Lemon juice', amount: '1/4 cup' },
        { name: 'Salt and pepper', amount: 'to taste' }
    ],
    instructions: [
        'Rinse quinoa under cold water. In a saucepan, bring quinoa and water/broth to a boil. Reduce heat, cover, and simmer for 15 minutes.',
        'Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and let cool.',
        'In a large bowl, combine the cooled quinoa, cucumber, tomatoes, red onion, chickpeas, and parsley.',
        'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the vinaigrette.',
        'Pour the vinaigrette over the salad and toss to combine. Stir in feta cheese if using.',
        'Serve chilled or at room temperature.'
    ],
    dietary: { isVegetarian: true, isVegan: true, isGlutenFree: true }
  },
  {
    id: 13,
    name: 'Garlic Butter Shrimp Scampi',
    description: 'A quick and elegant pasta dish featuring succulent shrimp in a garlic-butter sauce.',
    image: 'https://picsum.photos/seed/shrimpscampi/800/600',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Linguine or spaghetti', amount: '12 oz' },
        { name: 'Butter', amount: '1/2 cup' },
        { name: 'Garlic', amount: '4 cloves, minced' },
        { name: 'Shrimp', amount: '1 lb, peeled and deveined' },
        { name: 'White wine or chicken broth', amount: '1/4 cup' },
        { name: 'Lemon juice', amount: '2 tbsp' },
        { name: 'Red pepper flakes', amount: '1/4 tsp' },
        { name: 'Fresh parsley', amount: '1/4 cup, chopped' },
        { name: 'Salt and pepper', amount: 'to taste' }
    ],
    instructions: [
        'Cook pasta according to package directions. Reserve 1/2 cup pasta water.',
        'Melt butter in a large skillet over medium heat. Add garlic and red pepper flakes and cook until fragrant, about 1 minute.',
        'Add shrimp and cook until pink, about 2-3 minutes. Remove shrimp from skillet.',
        'Add white wine and lemon juice to the skillet. Bring to a simmer and cook for 2 minutes.',
        'Return shrimp to the skillet. Stir in parsley.',
        'Add the cooked pasta to the skillet and toss to coat. Add reserved pasta water as needed to create a sauce.',
        'Season with salt and pepper. Serve immediately.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false }
  },
  {
    id: 14,
    name: 'Creamy Mushroom Risotto',
    description: 'A classic Italian rice dish that is rich, creamy, and deeply flavorful.',
    image: 'https://picsum.photos/seed/risotto/800/600',
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    difficulty: 'Hard',
    ingredients: [
        { name: 'Chicken or vegetable broth', amount: '6 cups' },
        { name: 'Olive oil', amount: '2 tbsp' },
        { name: 'Mushrooms', amount: '1 lb, sliced' },
        { name: 'Shallot', amount: '1, finely chopped' },
        { name: 'Arborio rice', amount: '1 1/2 cups' },
        { name: 'Dry white wine', amount: '1/2 cup' },
        { name: 'Parmesan cheese', amount: '1 cup, grated' },
        { name: 'Butter', amount: '2 tbsp' },
        { name: 'Fresh parsley', amount: 'chopped, for garnish' }
    ],
    instructions: [
        'In a saucepan, warm the broth over low heat.',
        'Heat olive oil in a large, heavy-bottomed pot over medium heat. Add mushrooms and cook until browned. Remove and set aside.',
        'Add shallot to the pot and cook until soft. Add the arborio rice and stir for 1 minute to toast the grains.',
        'Pour in the white wine and cook until it is absorbed, stirring constantly.',
        'Add a ladle of warm broth to the rice and stir until it is absorbed. Continue adding broth one ladle at a time, stirring constantly, until the rice is creamy and al dente (about 20-25 minutes).',
        'Stir in the cooked mushrooms, Parmesan cheese, and butter. Season with salt and pepper.',
        'Garnish with parsley before serving.'
    ],
    dietary: { isVegetarian: true, isVegan: false, isGlutenFree: true }
  },
  {
    id: 15,
    name: 'Homemade Pizza',
    description: 'A customizable pizza that is fun to make and delicious to eat.',
    image: 'https://picsum.photos/seed/pizza/800/600',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
        { name: 'Pizza dough', amount: '1 lb' },
        { name: 'Pizza sauce', amount: '1 cup' },
        { name: 'Mozzarella cheese', amount: '2 cups, shredded' },
        { name: 'Pepperoni', amount: 'optional' },
        { name: 'Mushrooms', amount: 'optional, sliced' },
        { name: 'Bell peppers', amount: 'optional, sliced' },
        { name: 'Olives', amount: 'optional, sliced' },
        { name: 'Olive oil', amount: '1 tbsp' }
    ],
    instructions: [
        'Preheat oven to 475°F (245°C). If you have a pizza stone, place it in the oven to preheat.',
        'On a lightly floured surface, stretch or roll out the pizza dough to your desired thickness.',
        'Transfer the dough to a pizza peel or a parchment-lined baking sheet. Brush the edges with olive oil.',
        'Spread the pizza sauce evenly over the dough, leaving a small border.',
        'Sprinkle with mozzarella cheese and add your favorite toppings.',
        'Bake for 12-15 minutes, or until the crust is golden brown and the cheese is bubbly and melted.',
        'Let cool for a few minutes before slicing and serving.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false }
  },
  {
    id: 16,
    name: 'Chocolate Chip Cookies',
    description: 'The ultimate classic cookie: soft, chewy, and loaded with chocolate chips.',
    image: 'https://picsum.photos/seed/cookies/800/600',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'Easy',
    ingredients: [
        { name: 'All-purpose flour', amount: '2 1/4 cups' },
        { name: 'Baking soda', amount: '1 tsp' },
        { name: 'Salt', amount: '1/2 tsp' },
        { name: 'Unsalted butter', amount: '1 cup, softened' },
        { name: 'Granulated sugar', amount: '3/4 cup' },
        { name: 'Brown sugar', amount: '3/4 cup, packed' },
        { name: 'Vanilla extract', amount: '1 tsp' },
        { name: 'Large eggs', amount: '2' },
        { name: 'Semi-sweet chocolate chips', amount: '2 cups' }
    ],
    instructions: [
        'Preheat oven to 375°F (190°C).',
        'In a small bowl, whisk together flour, baking soda, and salt.',
        'In a large bowl, beat the butter, granulated sugar, and brown sugar with an electric mixer until creamy.',
        'Beat in the vanilla extract and eggs, one at a time.',
        'Gradually add the flour mixture and mix on low speed until just combined.',
        'Stir in the chocolate chips.',
        'Drop rounded tablespoons of dough onto ungreased baking sheets.',
        'Bake for 10-12 minutes or until golden brown. Let cool on baking sheets for a few minutes before transferring to wire racks to cool completely.'
    ],
    dietary: { isVegetarian: true, isVegan: false, isGlutenFree: false }
  },
  {
    id: 17,
    name: 'Classic Caesar Salad',
    description: 'A crisp romaine salad with a creamy, tangy dressing, croutons, and Parmesan cheese.',
    image: 'https://picsum.photos/seed/caesarsalad/800/600',
    prepTime: 20,
    cookTime: 5,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
        { name: 'Romaine lettuce', amount: '1 large head, chopped' },
        { name: 'Croutons', amount: '1 cup' },
        { name: 'Parmesan cheese', amount: '1/2 cup, shaved or grated' },
        { name: 'Garlic', amount: '2 cloves, minced' },
        { name: 'Anchovy paste', amount: '2 tsp (or 2 anchovy fillets, minced)' },
        { name: 'Egg yolk', amount: '1 large' },
        { name: 'Dijon mustard', amount: '1 tsp' },
        { name: 'Lemon juice', amount: '2 tbsp' },
        { name: 'Olive oil', amount: '1/2 cup' }
    ],
    instructions: [
        'To make the dressing, whisk together garlic, anchovy paste, egg yolk, and Dijon mustard in a bowl.',
        'Whisk in the lemon juice.',
        'Slowly drizzle in the olive oil while whisking continuously until the dressing is emulsified and creamy.',
        'Season with salt and pepper to taste.',
        'In a large salad bowl, combine the chopped romaine lettuce, croutons, and Parmesan cheese.',
        'Drizzle with the Caesar dressing and toss gently to coat everything evenly.',
        'Serve immediately with extra Parmesan cheese on top.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false }
  },
  {
    id: 18,
    name: 'Hearty Beef Stew',
    description: 'A comforting, slow-cooked stew with tender beef and vegetables.',
    image: 'https://picsum.photos/seed/beefstew/800/600',
    prepTime: 20,
    cookTime: 120,
    servings: 6,
    difficulty: 'Medium',
    ingredients: [
        { name: 'Beef chuck', amount: '2 lbs, cut into 1-inch cubes' },
        { name: 'All-purpose flour', amount: '1/4 cup' },
        { name: 'Olive oil', amount: '2 tbsp' },
        { name: 'Onion', amount: '1 large, chopped' },
        { name: 'Carrots', amount: '3, chopped' },
        { name: 'Celery', amount: '3 stalks, chopped' },
        { name: 'Garlic', amount: '3 cloves, minced' },
        { name: 'Beef broth', amount: '4 cups' },
        { name: 'Red wine', amount: '1 cup (optional)' },
        { name: 'Tomato paste', amount: '2 tbsp' },
        { name: 'Potatoes', amount: '1 1/2 lbs, peeled and cubed' },
        { name: 'Bay leaf', amount: '1' },
        { name: 'Thyme', amount: '1 tsp' }
    ],
    instructions: [
        'Toss beef cubes with flour, salt, and pepper.',
        'Heat olive oil in a large Dutch oven over medium-high heat. Brown the beef in batches and set aside.',
        'Add onion, carrots, and celery to the pot and cook until softened.',
        'Stir in garlic and tomato paste and cook for 1 minute.',
        'If using, pour in red wine to deglaze the pot, scraping up any browned bits. Cook until the wine has reduced by half.',
        'Return beef to the pot. Add beef broth, potatoes, bay leaf, and thyme.',
        'Bring to a boil, then reduce heat to low, cover, and simmer for at least 2 hours, or until beef is very tender.',
        'Remove bay leaf before serving.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: false }
  },
  {
    id: 19,
    name: 'Spicy Thai Green Curry',
    description: 'A fragrant and spicy curry with coconut milk, vegetables, and chicken or tofu.',
    image: 'https://picsum.photos/seed/thaicurry/800/600',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
        { name: 'Coconut milk', amount: '1 can (13.5 oz)' },
        { name: 'Green curry paste', amount: '2-3 tbsp' },
        { name: 'Chicken breast or tofu', amount: '1 lb, cubed' },
        { name: 'Bamboo shoots', amount: '1/2 cup, sliced' },
        { name: 'Red bell pepper', amount: '1, sliced' },
        { name: 'Fish sauce or soy sauce', amount: '1 tbsp' },
        { name: 'Sugar', amount: '1 tsp' },
        { name: 'Lime leaves', amount: '3-4' },
        { name: 'Thai basil leaves', amount: '1/2 cup' },
        { name: 'Jasmine rice', amount: 'for serving' }
    ],
    instructions: [
        'Spoon the thick cream from the top of the coconut milk can into a large pan. Heat over medium heat until the oil separates.',
        'Add the green curry paste and fry for 1-2 minutes until fragrant.',
        'Add the chicken or tofu and cook until lightly browned.',
        'Pour in the rest of the coconut milk, bamboo shoots, and bell pepper. Stir in fish sauce, sugar, and lime leaves.',
        'Bring to a simmer and cook for 5-7 minutes, until the chicken is cooked through and vegetables are tender.',
        'Stir in the Thai basil leaves just before serving.',
        'Serve hot with jasmine rice.'
    ],
    dietary: { isVegetarian: false, isVegan: false, isGlutenFree: true }
  },
  {
    id: 20,
    name: 'Fresh Mango Salsa',
    description: 'A vibrant, sweet, and spicy salsa perfect with chips, fish, or chicken.',
    image: 'https://picsum.photos/seed/mangosalsa/800/600',
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    difficulty: 'Easy',
    ingredients: [
        { name: 'Mangoes', amount: '2 ripe, diced' },
        { name: 'Red onion', amount: '1/2, finely diced' },
        { name: 'Red bell pepper', amount: '1/2, finely diced' },
        { name: 'Jalapeño', amount: '1, minced (seeds removed for less heat)' },
        { name: 'Cilantro', amount: '1/2 cup, chopped' },
        { name: 'Lime juice', amount: 'from 1 lime' },
        { name: 'Salt', amount: '1/4 tsp' }
    ],
    instructions: [
        'In a medium bowl, combine the diced mangoes, red onion, red bell pepper, jalapeño, and cilantro.',
        'Squeeze the lime juice over the mixture.',
        'Sprinkle with salt and gently toss everything to combine.',
        'Let the salsa sit for at least 10 minutes for the flavors to meld.',
        'Serve with tortilla chips or as a topping for grilled meats.'
    ],
    dietary: { isVegetarian: true, isVegan: true, isGlutenFree: true }
  }
];
   