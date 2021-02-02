//Core
const { Router } = require('express');
//Controller
const favoriteController = require('./favorite.controller');
//Middleware
const validators = require('../../middleware/validators');

const { getFavIngredients, addFavIngredient, removeFavIngredient } = favoriteController;
const { getFavRecipes, addFavRecipe, removeFavRecipe } = favoriteController;
const { validateToken, validateId, validateQueryParams } = validators;

const favoriteRouter = Router();

// @ GET /api/favorites/ingredients
favoriteRouter.get('/ingredients', validateToken, validateQueryParams, getFavIngredients);

// @ PATCH /api/favorites/ingredients/:id
favoriteRouter.patch('/ingredients/:id', validateToken, validateId, addFavIngredient);

// @ DELETE /api/favorites/ingredients/:id
favoriteRouter.delete('/ingredients/:id', validateToken, validateId, removeFavIngredient);

// @ GET /api/favorites/recipes
favoriteRouter.get('/recipes', validateToken, validateQueryParams, getFavRecipes);

// @ PATCH /api/favorites/recipes/:id
favoriteRouter.patch('/recipes/:id', validateToken, validateId, addFavRecipe);

// @ DELETE /api/favorites/recipes/:id
favoriteRouter.delete('/recipes/:id', validateToken, validateId, removeFavRecipe);

module.exports = favoriteRouter;
