//Core Mongoose
const { Schema, model } = require('mongoose');

const cuisineSchema = new Schema({
	name: { type: String, required: true },
	label: { type: String, required: true },
	img: { type: String, required: true },
});

const categorySchema = new Schema({
	name: { type: String, required: true },
	label: { type: String, required: true },
	img: { type: String, required: true },
});

const cuisine = model('Recipe.cuisine', cuisineSchema);
const category = model('Recipe.category', categorySchema);

module.exports = { cuisine, category };
