//Core
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const recipeSchema = new Schema({
	name: { type: String, required: true },
	category: { type: String, required: true },
	cuisine: { type: String, required: true },
	cookingTime: { type: String, required: true },
	description: { type: String, required: true },
	protein: { type: Number, required: true },
	fat: { type: Number, required: true },
	carbs: { type: Number, required: true },
	kcal: { type: Number, required: true },
	ingredients: [{ type: ObjectId, ref: 'Ingredient' }],
	authorID: { type: ObjectId, ref: 'User' },
});

recipeSchema.plugin(mongoosePaginate);

module.exports = model('Recipe', recipeSchema);

// ingredients: [
// {
// 	ingredientID: { type: ObjectId, ref: 'Ingredient' },
// 	amount: { type: Number, required: true },
// 	unit: { type: String, required: true },
// },
// ],
