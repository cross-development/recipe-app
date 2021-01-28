//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Middleware
const middleware = require('@middleware');

const { getAllRecipes, getRecipeById, getRecipesByFilter } = recipeController;
const { validateFilter, validateId, validateQueryParams } = middleware;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', validateQueryParams, getAllRecipes);

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validateId, getRecipeById);

// @ GET /api/recipes/:filter/:id
recipeRouter.get(
	'/:filter/:id',
	validateFilter,
	validateQueryParams,
	validateId,
	getRecipesByFilter,
);

module.exports = recipeRouter;
