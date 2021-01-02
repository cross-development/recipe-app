//Core
const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ingredientModel = new Schema({});

ingredientModel.plugin(mongoosePaginate);

module.exports = model('Ingredient', ingredientModel);
