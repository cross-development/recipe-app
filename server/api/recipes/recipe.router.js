//Core
const { Router } = require('express');
//Controller
const recipeController = require('./recipe.controller');
//Middleware
const middleware = require('../../middleware/middleware');

const { getAllRecipes, getRecipeById, getRecipeByQuery } = recipeController;
const { validateId, validatePage, validateQuery } = middleware;

const recipeRouter = Router();

// @ GET /api/recipes
recipeRouter.get('/', validatePage, getAllRecipes);

// @ GET /api/recipes/search (by query from req.query)
recipeRouter.get('/search', validateQuery, getRecipeByQuery);

// @ GET /api/recipes/:id
recipeRouter.get('/:id', validateId, getRecipeById);

module.exports = recipeRouter;
