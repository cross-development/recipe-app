//Core Mongoose
const { Schema, model } = require('mongoose');

const cuisineSchema = new Schema({
	name: { type: String, required: true },
	label: { type: String, required: true },
	ing: { type: String, required: true },
});

module.exports = model('Recipe.cuisine', cuisineSchema);
