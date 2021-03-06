//Core Mongoose
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
//Configs
const configs = require('../../configs');

const recipeSchema = new Schema({
	name: { type: String, required: true },
	category: { type: ObjectId, ref: 'Recipe.category' },
	cuisine: { type: ObjectId, ref: 'Recipe.cuisine' },
	cookingTime: { type: String, required: true },
	ingredients: [
		{
			info: { type: ObjectId, ref: 'Ingredient' },
			amount: { type: Number, required: true },
			unit: {
				type: String,
				enum: configs.recipes.ingredientUnits,
				required: true,
			},
		},
	],
	description: { type: String, required: true },
	protein: { type: Number, required: true },
	fat: { type: Number, required: true },
	carbs: { type: Number, required: true },
	kcal: { type: Number, required: true },
	author: {
		id: { type: ObjectId, ref: 'User' },
		name: { type: String },
	},
});

recipeSchema.plugin(mongoosePaginate);

module.exports = model('Recipe', recipeSchema);
