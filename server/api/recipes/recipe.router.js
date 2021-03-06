//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { getAllRecipes, getRecipeById, getRecipesByFilter, getRecipeInfo } = recipeController;
const { querySchema, paramSchema } = validationSchemas;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', validate(querySchema, 'query'), tryCatchHandler(getAllRecipes));

// @ GET /api/recipes/info
recipeRouter.get('/info', tryCatchHandler(getRecipeInfo));

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validate(paramSchema, 'params'), tryCatchHandler(getRecipeById));

// @ GET /api/recipes/:filter/:id
recipeRouter.get(
	'/:filter/:id',
	validate(paramSchema, 'params'),
	validate(querySchema, 'query'),
	tryCatchHandler(getRecipesByFilter),
);

module.exports = recipeRouter;
