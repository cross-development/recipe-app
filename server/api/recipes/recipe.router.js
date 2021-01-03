//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Middleware
const recipeMiddleware = require('./recipe.middleware');

const {
	getAllRecipes,
	getRecipeById,
	getRecipeByQuery,
	addRecipe,
	removeRecipe,
	updateRecipe,
} = recipeController;

const {
	validateCreateRecipe,
	validateUpdateRecipe,
	validateRecipeId,
	validateRecipeQuery,
} = recipeMiddleware;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', getAllRecipes);

// @ GET /api/recipes/search (by query from req.query)
recipeRouter.get('/search', validateRecipeQuery, getRecipeByQuery);

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validateRecipeId, getRecipeById);

// @ POST /api/recipes
recipeRouter.post('/', validateCreateRecipe, addRecipe);

// @ DELETE /api/recipes/:id
recipeRouter.delete('/:id', validateRecipeId, removeRecipe);

// @ PATCH /api/recipes/:id
recipeRouter.patch('/:id', validateRecipeId, validateUpdateRecipe, updateRecipe);

module.exports = recipeRouter;
