//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
//Middleware
const userMiddleware = require('./user.middleware');
const middleware = require('../../middleware/middleware');

const { singUpUser, signInUser, signOutUser, getCurrentUser } = userController;
const { addIngredientToFav, removeIngredientFromFav } = userController;
const { addRecipe, removeRecipe, updateRecipe } = userController;

const { validateSignUpUser, validateSignInUser, validateToken } = userMiddleware;
const { validateCreateRecipe, validateUpdateRecipe } = userMiddleware;
const { validateId } = middleware;

const userRouter = Router();

// AUTH @ POST /api/auth/register
userRouter.post('/register', validateSignUpUser, singUpUser);

// AUTH @ POST /api/auth/login
userRouter.post('/login', validateSignInUser, signInUser);

// AUTH @ POST /api/auth/logout
userRouter.post('/logout', validateToken, signOutUser);

// USERS @ GET /api/users/current
userRouter.get('/current', validateToken, getCurrentUser);

// RECIPES @ POST /api/users/recipes
userRouter.post('/recipes', validateToken, validateCreateRecipe, addRecipe);

// RECIPES @ DELETE /api/users/recipes/:id
userRouter.delete('/recipes/:id', validateToken, validateId, removeRecipe);

// RECIPES @ PATCH /api/users/recipes/:id
userRouter.patch('/recipes/:id', validateToken, validateId, validateUpdateRecipe, updateRecipe);

// INGREDIENTS @ PATCH /api/users/ingredients/:id
userRouter.patch('/ingredients/:id', validateToken, validateId, addIngredientToFav);

// INGREDIENTS @ DELETE /api/users/ingredients/:id
userRouter.delete('/ingredients/:id', validateToken, validateId, removeIngredientFromFav);

//TODO: add features to get custom recipes and featured ingredients

module.exports = userRouter;
