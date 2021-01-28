//Core
const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
	name: { type: String, required: true },
	label: { type: String, required: true },
	ing: { type: String, required: true },
});

module.exports = model('Recipe.category', categorySchema);
