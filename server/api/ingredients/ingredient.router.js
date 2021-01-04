//Core
const { Router } = require('express');
//Controller
const ingredientController = require('./ingredient.controller');
//Middleware
const ingredientMiddleware = require('./ingredient.middleware');

const { getAllIngredients, getIngredientById, getIngredientByQuery } = ingredientController;
const { validateIngredientId, validateIngredientQuery, validateIngredientPage } = ingredientMiddleware;

const ingredientRouter = Router();

// @ GET /api/ingredients
ingredientRouter.get('/', validateIngredientPage, getAllIngredients);

// @ GET /api/ingredients/search (by query from req.query)
ingredientRouter.get('/search', validateIngredientQuery, getIngredientByQuery);

// @ GET /api/ingredients/:id
ingredientRouter.get('/:id', validateIngredientId, getIngredientById);

module.exports = ingredientRouter;
