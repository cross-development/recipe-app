//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
//Middleware
const userMiddleware = require('./user.middleware');

const { singUpUser, signInUser, signOutUser, getCurrentUser } = userController;
const { addRecipe, removeRecipe, updateRecipe } = userController;
const { addIngredient, removeIngredient, updateIngredient } = userController;

const { validateSignUpUser, validateSignInUser, validateToken, validateID } = userMiddleware;
const { validateCreateRecipe, validateUpdateRecipe } = userMiddleware;
const { validateCreateIngredient, validateUpdateIngredient } = userMiddleware;

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
userRouter.delete('/recipes/:id', validateToken, validateID, removeRecipe);

// RECIPES @ PATCH /api/users/recipes/:id
userRouter.patch('/recipes/:id', validateToken, validateID, validateUpdateRecipe, updateRecipe);

// INGREDIENTS @ POST /api/users/ingredients
userRouter.post('/ingredients', validateToken, validateCreateIngredient, addIngredient);

// INGREDIENTS @ DELETE /api/users/ingredients/:id
userRouter.delete('/ingredients/:id', validateToken, validateID, removeIngredient);

// INGREDIENTS @ PATCH /api/users/ingredients/:id
userRouter.patch(
	'/ingredients/:id',
	validateToken,
	validateID,
	validateUpdateIngredient,
	updateIngredient,
);

module.exports = userRouter;
