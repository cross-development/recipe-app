//Core
const { Schema, model } = require('mongoose');

const cuisineSchema = new Schema({
	name: { type: String, required: true },
});

module.exports = model('Recipe.cuisine', cuisineSchema);
