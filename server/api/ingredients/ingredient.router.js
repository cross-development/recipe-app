//Core
const { Router } = require('express');
//Controller
const ingredientController = require('./ingredient.controller');
//Middleware
const validators = require('../../middleware/validators');

const { getAllIngredients, getIngredientById } = ingredientController;
const { validateId, validateQueryParams } = validators;

const ingredientRouter = Router();

// @ GET /api/ingredients
ingredientRouter.get('/', validateQueryParams, getAllIngredients);

// @ GET /api/ingredients/:id
ingredientRouter.get('/:id', validateId, getIngredientById);

module.exports = ingredientRouter;
