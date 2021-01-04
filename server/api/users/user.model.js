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
	recipes: [{ type: ObjectId, ref: 'Recipe' }],
	ingredients: [{ type: ObjectId, ref: 'Ingredient' }],
});

module.exports = model('User', userSchema);
