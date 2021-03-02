//Core
const { Router } = require('express');
//Controller
const { getRecipesCategories } = require('./recipeCategory.controller');
//Helpers
const tryCatchHandler = require('../../helpers/tryCatchHandler');

const recipeCategoryRouter = Router();

// @ GET /api/recipe-categories
recipeCategoryRouter.get('/', tryCatchHandler(getRecipesCategories));

module.exports = recipeCategoryRouter;
