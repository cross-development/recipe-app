//Core
const { Router } = require('express');
//Controller
const authController = require('../auth/auth.controller');
const favoriteController = require('./favorite.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { getFavIngredients, addFavIngredient, removeFavIngredient } = favoriteController;
const { getFavRecipes, addFavRecipe, removeFavRecipe } = favoriteController;
const { validateToken } = authController;
const { paramSchema, querySchema } = validationSchemas;

const favoriteRouter = Router();

// @ GET /api/favorites/ingredients
favoriteRouter.get(
	'/ingredients',
	tryCatchHandler(validateToken),
	validate(querySchema, 'query'),
	tryCatchHandler(getFavIngredients),
);

// @ PATCH /api/favorites/ingredients/:id
favoriteRouter.patch(
	'/ingredients/:id',
	tryCatchHandler(validateToken),
	validate(paramSchema, 'params'),
	tryCatchHandler(addFavIngredient),
);

// @ DELETE /api/favorites/ingredients/:id
favoriteRouter.delete(
	'/ingredients/:id',
	tryCatchHandler(validateToken),
	validate(paramSchema, 'params'),
	tryCatchHandler(removeFavIngredient),
);

// @ GET /api/favorites/recipes
favoriteRouter.get(
	'/recipes',
	tryCatchHandler(validateToken),
	validate(querySchema, 'query'),
	tryCatchHandler(getFavRecipes),
);

// @ PATCH /api/favorites/recipes/:id
favoriteRouter.patch(
	'/recipes/:id',
	tryCatchHandler(validateToken),
	validate(paramSchema, 'params'),
	tryCatchHandler(addFavRecipe),
);

// @ DELETE /api/favorites/recipes/:id
favoriteRouter.delete(
	'/recipes/:id',
	tryCatchHandler(validateToken),
	validate(paramSchema, 'params'),
	tryCatchHandler(removeFavRecipe),
);

module.exports = favoriteRouter;
