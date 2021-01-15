//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
//Middleware
const userMiddleware = require('./user.middleware');
const middleware = require('@middleware');

const { getUserFavIngredients, addIngredientToFav, removeIngredientFromFav } = userController;
const { getUserFavRecipes, addRecipeToFav, removeRecipeFromFav } = userController;
const { getUserRecipes, addRecipe, removeRecipe, updateRecipe } = userController;
const { getCurrentUser } = userController;

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

// @ GET /api/users/:id/recipes
userRouter.get('/recipes', validateToken, validateQueryParams, getUserRecipes);

// @ POST /api/users/recipes
userRouter.post('/recipes', validateToken, validateCreateRecipe, addRecipe);

// @ DELETE /api/users/recipes/:id
userRouter.delete('/recipes/:id', validateToken, validateId, removeRecipe);

// @ PATCH /api/users/recipes/:id
userRouter.patch('/recipes/:id', validateToken, validateId, validateUpdateRecipe, updateRecipe);

// =============================================================================
// USER FAVORITE INGREDIENTS                                                  ||
// =============================================================================

// @ GET /api/users/ingredients
userRouter.get('/fav-ingredients', validateToken, getUserFavIngredients);

// @ POST /api/users/ingredients/:id
userRouter.post('/fav-ingredients/:id', validateToken, validateId, addIngredientToFav);

// @ DELETE /api/users/ingredients/:id
userRouter.delete('/fav-ingredients/:id', validateToken, validateId, removeIngredientFromFav);

// =============================================================================
// USER FAVORITE RECIPES                                                      ||
// =============================================================================

// @ GET /api/users/fav-recipes
userRouter.get('/fav-recipes', validateToken, getUserFavRecipes);

// @ POST /api/users/fav-recipes/:id
userRouter.post('/fav-recipes/:id', validateToken, validateId, addRecipeToFav);

// @ DELETE /api/users/fav-recipes/:id
userRouter.delete('/fav-recipes/:id', validateToken, validateId, removeRecipeFromFav);

module.exports = userRouter;
