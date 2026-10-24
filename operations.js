import Recipe from "./models/Recipe.js";

// ---- TASK 2: create a recipe ----
// createRecipe(data) — data is { title, chef, cuisine, minutes }.
// Create the recipe with an empty ingredients array and return the saved document.
//   e.g. return Recipe.create({ ...data, ingredients: [] });
export async function createRecipe(data) {
  // TODO
}

// ---- TASK 2: read recipes, newest first, with an optional filter ----
// getRecipes(filter) — return all recipes matching `filter` (or all if none),
// sorted by createdAt descending.
//   e.g. return Recipe.find(filter).sort({ createdAt: -1 });
export async function getRecipes(filter = {}) {
  // TODO
}

// ---- TASK 3: read one recipe by id ----
// getRecipeById(recipeId) — return the single recipe with this id (or null).
//   Use Recipe.findById(recipeId).
export async function getRecipeById(recipeId) {
  // TODO
}

// ---- TASK 3: update a recipe ----
// updateRecipe(recipeId, patch) — apply `patch` (e.g. { minutes: 12 }) to the recipe
// and return the UPDATED document.
//   Use Recipe.findByIdAndUpdate(recipeId, patch, { new: true, runValidators: true }).
export async function updateRecipe(recipeId, patch) {
  // TODO
}

// ---- TASK 4: add an embedded ingredient ----
// addIngredient(recipeId, name, quantity, unit) — find the recipe by id, push the
// ingredient onto its `ingredients` array, save (so validators run), and return the recipe.
//   Use Recipe.findById(...), .ingredients.push(...), await recipe.save().
export async function addIngredient(recipeId, name, quantity, unit) {
  // TODO
}

// ---- TASK 4: delete a recipe ----
// deleteRecipe(recipeId) — delete by id.
//   Return { deleted: true } on success, or { deleted: false } if none was found.
export async function deleteRecipe(recipeId) {
  // TODO
}

// ---- TASK 5: the quickest recipes ----
// quickRecipes(limit) — return the `limit` recipes with the lowest `minutes`
// (quickest first).
//   Use Recipe.find().sort({ minutes: 1 }).limit(limit).
export async function quickRecipes(limit) {
  // TODO
}
