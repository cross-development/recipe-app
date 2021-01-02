//Core
const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const recipeSchema = new Schema({});

recipeSchema.plugin(mongoosePaginate);

module.exports = model('Recipe', recipeSchema);
