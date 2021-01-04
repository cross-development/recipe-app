//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Middleware
const recipeMiddleware = require('./recipe.middleware');

const { getAllRecipes, getRecipeById, getRecipeByQuery } = recipeController;
const { validateRecipeId, validateRecipeQuery, validateRecipePage } = recipeMiddleware;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', validateRecipePage, getAllRecipes);

// @ GET /api/recipes/search (by query from req.query)
recipeRouter.get('/search', validateRecipeQuery, getRecipeByQuery);

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validateRecipeId, getRecipeById);

module.exports = recipeRouter;
