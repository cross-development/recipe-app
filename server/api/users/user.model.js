//Core Mongoose
const {
	Schema,
	model,
	Types: { ObjectId },
} = require('mongoose');

const userSchema = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	userRecipes: [{ type: ObjectId, ref: 'Recipe' }],
	favRecipes: [{ type: ObjectId, ref: 'Recipe' }],
	favIngredients: [{ type: ObjectId, ref: 'Ingredient' }],
	token: { type: String, required: false },
	verificationToken: { type: String, required: false },
	isVerified: { type: Boolean, required: false, default: false },
});

module.exports = model('User', userSchema);
