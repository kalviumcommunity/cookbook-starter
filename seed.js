import mongoose from "mongoose";
import { connectDB } from "./db.js";
import Recipe from "./models/Recipe.js";

const RECIPES = [
  {
    title: "Margherita Pizza",
    chef: "Ava",
    cuisine: "italian",
    minutes: 40,
    ingredients: [
      { name: "Flour", quantity: 300, unit: "g" },
      { name: "Tomato", quantity: 2, unit: "pcs" },
    ],
  },
  {
    title: "Paneer Tikka",
    chef: "Rohan",
    cuisine: "indian",
    minutes: 55,
    ingredients: [{ name: "Paneer", quantity: 250, unit: "g" }],
  },
  {
    title: "Veg Tacos",
    chef: "Mia",
    cuisine: "mexican",
    minutes: 25,
    ingredients: [],
  },
  {
    title: "Fried Rice",
    chef: "Kabir",
    cuisine: "chinese",
    minutes: 20,
    ingredients: [{ name: "Rice", quantity: 2, unit: "cups" }],
  },
  {
    title: "Pad Thai",
    chef: "Ava",
    cuisine: "thai",
    minutes: 35,
    ingredients: [],
  },
];

async function seed() {
  await connectDB();
  await Recipe.deleteMany({});
  const created = await Recipe.insertMany(RECIPES);
  console.log(`✓ Seeded ${created.length} recipes`);
  await mongoose.disconnect();
}

seed().catch((error) => {
  console.error("✗ Seed failed:", error.message);
  process.exit(1);
});
