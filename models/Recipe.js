import mongoose from "mongoose";

// ---- TASK 1: define ingredientSchema (embedded subdocument) ----
// Fields:
//   - name     (String, required)
//   - quantity (Number, required, min 1)
//   - unit     (String)
//
// const ingredientSchema = new mongoose.Schema({ ... });

// ---- TASK 1: define recipeSchema ----
// Fields:
//   - title       (String, required, trim)
//   - chef        (String, required)
//   - cuisine     (String, enum ["italian", "indian", "mexican", "chinese", "thai", "other"], default "other")
//   - minutes     (Number, min 0)
//   - ingredients (array of ingredientSchema — embedded)
//   - createdAt   (Date, default Date.now)
//
// const recipeSchema = new mongoose.Schema({ ... });

// ---- TASK 1: compile and export the model ----
// const Recipe = mongoose.model("Recipe", recipeSchema);
// export default Recipe;

export default null; // TODO: replace with the compiled Recipe model
