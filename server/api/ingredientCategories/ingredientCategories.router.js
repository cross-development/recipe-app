//Core
const { Router } = require('express');
//Controller
const ingredientCategoriesController = require('./ingredientCategories.controller');

const ingredientCategoryRouter = Router();

// @ GET /api/ingredient-categories
ingredientCategoryRouter.get('/', ingredientCategoriesController.getIngredientCategories);

module.exports = ingredientCategoryRouter;
