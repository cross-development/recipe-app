//Core
const { Router } = require('express');
//Controller
const ingredientController = require('./ingredient.controller');
//Middleware
const middleware = require('../../middleware/middleware');

const { getAllIngredients, getIngredientById, getIngredientByQuery } = ingredientController;
const { validateId, validatePage, validateQuery } = middleware;

const ingredientRouter = Router();

// @ GET /api/ingredients
ingredientRouter.get('/', validatePage, getAllIngredients);

// @ GET /api/ingredients/search (by query from req.query)
ingredientRouter.get('/search', validateQuery, getIngredientByQuery);

// @ GET /api/ingredients/:id
ingredientRouter.get('/:id', validateId, getIngredientById);

module.exports = ingredientRouter;
