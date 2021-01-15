//Core
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const userSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, required: false },
	userRecipes: [{ type: ObjectId, ref: 'Recipe' }],
	favRecipes: [{ type: ObjectId, ref: 'Recipe' }],
	favIngredients: [{ type: ObjectId, ref: 'Ingredient' }],
});

module.exports = model('User', userSchema);
