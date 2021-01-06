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
	ingredients: [
		{
			_id: { type: ObjectId, ref: 'Ingredient' },
			amount: { type: Number, required: true },
			unit: {
				type: String,
				enum: ['кг', 'г', 'л', 'мл', 'шт', 'стакан', 'ст.л.', 'ч.л.', 'щепотка', 'по вкусу'],
				required: true,
			},
		},
	],
	description: { type: String, required: true },
	protein: { type: Number, required: true },
	fat: { type: Number, required: true },
	carbs: { type: Number, required: true },
	kcal: { type: Number, required: true },
	authorID: { type: ObjectId, ref: 'User' },
});

recipeSchema.plugin(mongoosePaginate);

module.exports = model('Recipe', recipeSchema);
