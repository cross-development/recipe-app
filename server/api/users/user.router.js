//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
//Middleware
const userMiddleware = require('./user.middleware');
const middleware = require('@middleware');

const { getCurrentUser, getUserRecipes, addRecipe, removeRecipe, updateRecipe } = userController;
const { validateCreateRecipe, validateUpdateRecipe } = userMiddleware;
const { validateId, validateQueryParams, validateToken } = middleware;

const userRouter = Router();

// =============================================================================
// CURRENT USER                                                               ||
// =============================================================================

// @ GET /api/users/current
userRouter.get('/current', validateToken, getCurrentUser);

// =============================================================================
// USER CUSTOM RECIPES                                                        ||
// =============================================================================

// @ GET /api/users/recipes
userRouter.get('/recipes', validateToken, validateQueryParams, getUserRecipes);

// @ POST /api/users/recipes
userRouter.post('/recipes', validateToken, validateCreateRecipe, addRecipe);

// @ DELETE /api/users/recipes/:id
userRouter.delete('/recipes/:id', validateToken, validateId, removeRecipe);

// @ PATCH /api/users/recipes/:id
userRouter.patch('/recipes/:id', validateToken, validateId, validateUpdateRecipe, updateRecipe);

module.exports = userRouter;
