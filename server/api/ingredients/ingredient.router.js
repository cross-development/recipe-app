//Core
const { Router } = require('express');
//Controller
const ingredientController = require('./ingredient.controller');
//Middleware
const ingredientMiddleware = require('./ingredient.middleware');

const {
	getAllIngredients,
	getIngredientById,
	getIngredientByQuery,
	addIngredient,
	removeIngredient,
	updateIngredient,
} = ingredientController;

const {
	validateCreateIngredient,
	validateUpdateIngredient,
	validateIngredientId,
	validateIngredientQuery,
	validateIngredientPage,
} = ingredientMiddleware;

const ingredientRouter = Router();

// @ GET /api/ingredients
ingredientRouter.get('/', validateIngredientPage, getAllIngredients);

// @ GET /api/ingredients/search (by query from req.query)
ingredientRouter.get('/search', validateIngredientQuery, getIngredientByQuery);

// @ GET /api/ingredients/:id
ingredientRouter.get('/:id', validateIngredientId, getIngredientById);

// @ POST /api/ingredients
ingredientRouter.post('/', validateCreateIngredient, addIngredient);

// @ DELETE /api/ingredients/:id
ingredientRouter.delete('/:id', validateIngredientId, removeIngredient);

// @ PATCH /api/ingredients/:id
ingredientRouter.patch('/:id', validateIngredientId, validateUpdateIngredient, updateIngredient);

module.exports = ingredientRouter;
