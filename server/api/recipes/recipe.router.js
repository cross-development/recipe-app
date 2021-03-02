//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { getAllRecipes, getRecipeById, getRecipesByFilter } = recipeController;
const { querySchema, idSchema, filterSchema } = validationSchemas;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', validate(querySchema, 'query'), tryCatchHandler(getAllRecipes));

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validate(idSchema, 'params'), tryCatchHandler(getRecipeById));

// @ GET /api/recipes/:filter/:id
recipeRouter.get(
	'/:filter/:id',
	validate(filterSchema, 'params.filter'),
	validate(querySchema, 'query'),
	validate(idSchema, 'params'),
	tryCatchHandler(getRecipesByFilter),
);

module.exports = recipeRouter;
