//Core
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ingredientModel = new Schema({
	name: { type: String, required: true },
	protein: { type: Number, required: true },
	fat: { type: Number, required: true },
	carbs: { type: Number, required: true },
	kcal: { type: Number, required: true },
	authorID: { type: ObjectId, ref: 'User' },
});

ingredientModel.plugin(mongoosePaginate);

module.exports = model('Ingredient', ingredientModel);
