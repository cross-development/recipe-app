//Core
const { Router } = require('express');
//Controller
const { getIngredientCategories } = require('./ingredientCategories.controller');
//Helpers
const tryCatchHandler = require('../../helpers/tryCatchHandler');

const ingredientCategoryRouter = Router();

// @ GET /api/ingredient-categories
ingredientCategoryRouter.get('/', tryCatchHandler(getIngredientCategories));

module.exports = ingredientCategoryRouter;
