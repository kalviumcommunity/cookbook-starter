# CookBook — Model and Query a Recipe Collection with Mongoose

A tiny Node.js + Mongoose starter. The database connection, seed data, and test script are
already wired up. Your job is to **define the Mongoose schema** and **implement the data
operations**, then prove they work by running the test script.

You edit only two files: `models/Recipe.js` and `operations.js`. Every place you need to fill
in is marked with a `TODO` comment.

> Do not change `db.js`, `seed.js`, or `test.js`. Do not rename files.

## Setup & run
```bash
npm install
cp .env.example .env      # set MONGODB_URI (Atlas or local MongoDB)
npm run seed              # inserts 5 starter recipes (needs your schema)
npm run test              # runs your operations end to end
```

## What you edit
- `models/Recipe.js` — the embedded `ingredientSchema` + the `recipeSchema` (Task 1)
- `operations.js` — `createRecipe`, `getRecipes`, `getRecipeById`, `updateRecipe`, `addIngredient`, `deleteRecipe`, `quickRecipes` (Tasks 2–5)
