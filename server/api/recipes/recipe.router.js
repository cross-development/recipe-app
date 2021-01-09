//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Middleware
const middleware = require('../../middleware/middleware');

const { getAllRecipes, getRecipeById } = recipeController;
const { validateId, validateQueryParams } = middleware;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', validateQueryParams, getAllRecipes);

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validateId, getRecipeById);

module.exports = recipeRouter;
