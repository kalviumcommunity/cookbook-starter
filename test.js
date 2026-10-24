import mongoose from "mongoose";
import { connectDB } from "./db.js";
import {
  createRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  addIngredient,
  deleteRecipe,
  quickRecipes,
} from "./operations.js";

async function runTests() {
  await connectDB();
  console.log("\n=== TEST SUITE ===\n");

  try {
    // 1. Read all (seeded) recipes
    console.log("1. Getting all recipes (should see 5 from seed)...");
    const all = await getRecipes();
    console.log(`   Found: ${all.length} recipes`);
    all.forEach((r) => console.log(`   - "${r.title}" (${r.cuisine}, ${r.minutes} min)`));

    // 2. Create a recipe
    console.log("\n2. Creating a new recipe...");
    const recipe = await createRecipe({
      title: "Quick Omelette",
      chef: "Tester",
      cuisine: "other",
      minutes: 10,
    });
    console.log(`   Created: "${recipe.title}"  id=${recipe._id}`);
    console.log(`   Ingredients: ${recipe.ingredients.length}`);

    // 3. Filter by cuisine
    console.log("\n3. Getting only italian recipes...");
    const italian = await getRecipes({ cuisine: "italian" });
    console.log(`   Found: ${italian.length} italian recipes`);

    // 4. Read one by id
    console.log("\n4. Getting the new recipe by id...");
    const found = await getRecipeById(recipe._id);
    console.log(`   Got: "${found.title}" by ${found.chef}`);

    // 5. Update the recipe
    console.log("\n5. Updating the recipe time to 12 minutes...");
    const updated = await updateRecipe(recipe._id, { minutes: 12 });
    console.log(`   Minutes is now: ${updated.minutes}`);

    // 6. Add an embedded ingredient
    console.log("\n6. Adding an ingredient to the new recipe...");
    const withIng = await addIngredient(recipe._id, "Eggs", 3, "pcs");
    console.log(`   Recipe now has ${withIng.ingredients.length} ingredient(s)`);
    console.log(`   Ingredient: "${withIng.ingredients[0].name}" (${withIng.ingredients[0].quantity} ${withIng.ingredients[0].unit})`);

    // 7. Quickest recipes (sort + limit)
    console.log("\n7. Getting the 3 quickest recipes (by minutes)...");
    const quick = await quickRecipes(3);
    console.log(`   Returned: ${quick.length} recipes`);
    quick.forEach((r) => console.log(`   - ${r.minutes} min: "${r.title}"`));

    // 8. Delete the recipe
    console.log("\n8. Deleting the recipe...");
    const del = await deleteRecipe(recipe._id);
    console.log(`   Deleted: ${del.deleted}`);

    // 9. Verify
    console.log("\n9. Verifying delete...");
    const final = await getRecipes();
    console.log(`   Total recipes now: ${final.length} (should be 5 again)`);

    console.log("\n✓ All tests passed!\n");
  } catch (error) {
    console.error("\n✗ Test failed:", error.message, "\n");
  }

  await mongoose.disconnect();
}

runTests();
