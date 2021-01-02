//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Middleware
const recipeMiddleware = require('./recipe.middleware');

const {
	getAllRecipes,
	getRecipeById,
	addRecipe,
	removeRecipe,
	updateRecipe,
	paginationRecipes,
	filtrationRecipes,
} = recipeController;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', getAllRecipes);

// @ GET /api/recipes/:id
recipeRouter.get('/:id', getRecipeById);

// @ POST /api/recipes
recipeRouter.post('/', addRecipe);

// @ DELETE /api/recipes/:id
recipeRouter.delete('/:id', removeRecipe);

// @ PATCH /api/recipes/:id
recipeRouter.patch('/:id', updateRecipe);

module.exports = recipeRouter;
