//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
const authController = require('../auth/auth.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { getCurrentUser, getUserRecipes, addRecipe, removeRecipe, updateRecipe } = userController;
const { validateToken } = authController;
const { paramSchema, querySchema, createRecipeSchema, updateRecipeSchema } = validationSchemas;

const userRouter = Router();

// =============================================================================
// CURRENT USER                                                               ||
// =============================================================================

// @ GET /api/users/current
userRouter.get('/current', tryCatchHandler(validateToken), tryCatchHandler(getCurrentUser));

// =============================================================================
// USER CUSTOM RECIPES                                                        ||
// =============================================================================

// @ GET /api/users/recipes
userRouter.get(
	'/recipes',
	tryCatchHandler(validateToken),
	validate(querySchema, 'query'),
	tryCatchHandler(getUserRecipes),
);

// @ POST /api/users/recipes
userRouter.post(
	'/recipes',
	tryCatchHandler(validateToken),
	validate(createRecipeSchema),
	tryCatchHandler(addRecipe),
);

// @ DELETE /api/users/recipes/:id
userRouter.delete(
	'/recipes/:id',
	tryCatchHandler(validateToken),
	validate(paramSchema, 'params'),
	tryCatchHandler(removeRecipe),
);

// @ PATCH /api/users/recipes/:id
userRouter.patch(
	'/recipes/:id',
	tryCatchHandler(validateToken),
	validate(paramSchema, 'params'),
	validate(updateRecipeSchema),
	tryCatchHandler(updateRecipe),
);

module.exports = userRouter;
