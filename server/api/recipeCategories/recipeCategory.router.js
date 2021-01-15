//Core
const { Router } = require('express');
//Controller
const recipeCategoryController = require('./recipeCategory.controller');

const recipeCategoryRouter = Router();

// @ GET /api/recipe-categories
recipeCategoryRouter.get('/', recipeCategoryController.getRecipesCategories);

module.exports = recipeCategoryRouter;
