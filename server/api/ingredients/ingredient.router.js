//Core
const { Router } = require('express');
//Controller
const ingredientController = require('./ingredient.controller');
//Middleware
const middleware = require('@middleware/middleware');

const { getAllIngredients, getIngredientById } = ingredientController;
const { validateId, validateQueryParams } = middleware;

const ingredientRouter = Router();

// @ GET /api/ingredients
ingredientRouter.get('/', validateQueryParams, getAllIngredients);

// @ GET /api/ingredients/:id
ingredientRouter.get('/:id', validateId, getIngredientById);

module.exports = ingredientRouter;
