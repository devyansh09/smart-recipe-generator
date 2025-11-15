# smart-recipe-generator
Project Overview

Smart Recipe Generator is an AI-assisted web application that helps users generate recipes based on the ingredients they have. Users can upload ingredient images, manually enter ingredients, apply filters such as dietary preferences and difficulty levels, and view AI-generated recipes with nutrition, match percentage, needed ingredients, and substitutions.

This project is built using React + TypeScript + Vite, with a mock AI backend that simulates recipe generation for offline, error-free local testing.

🚀 Features

✔ Upload ingredient images
✔ Enter ingredients manually
✔ Apply filters (dietary, difficulty, cook time)
✔ View ranked recipes (match %)
✔ See nutritional information
✔ Ingredient substitutions
✔ Recipe detail page with instructions
✔ Fully responsive UI
✔ Mock AI mode (no API key needed)

Tech Stack

| Layer                | Technology                |
| -------------------- | ------------------------- |
| Frontend             | React, TypeScript, Vite   |
| Styling              | Tailwind CSS              |
| Mock Backend         | Custom TypeScript service |
| Build Tool           | Vite                      |
| Deployment Ready For | Vercel / GitHub Pages     |

Project Structure 
smart-recipe-generator/
│
├── components/           # UI components
├── constants/            # Mock recipes and data
├── services/             # Mock Gemini-like AI service
├── public/               # Static assets
├── App.tsx               # Main app logic
├── types.ts              # Types & interfaces
├── vite.config.ts        # Vite config
└── README.md             # Project documentation

How to Run Locally
1. Clone the repository
git clone https://github.com/<your-username>/smart-recipe-generator.git
cd smart-recipe-generator

2. Install dependencies
npm install

3. Start development server
npm run dev


Vite will start the dev server at:

http://localhost:5173/

