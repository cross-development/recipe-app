const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({});

module.exports = model('Recipe', recipeSchema);
