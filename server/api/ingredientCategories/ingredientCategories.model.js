//Core Mongoose
const { Schema, model } = require('mongoose');

const ingredientCategoriesSchema = new Schema({
	name: { type: String, required: true },
});

module.exports = model('Ingredient.category', ingredientCategoriesSchema);
