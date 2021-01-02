//Core
const { Router } = require('express');
//Controller
const userController = require('./user.controller');
//Middleware
const userMiddleware = require('./user.middleware');

const { singUpUser, signInUser, signOutUser, getCurrentUser } = userController;
const { validateSignUpUser, validateSignInUser, validateUserToken } = userMiddleware;

const userRouter = Router();

// @ POST /api/auth/register
userRouter.post('/register', validateSignUpUser, singUpUser);

// @ POST /api/auth/login
userRouter.post('/login', validateSignInUser, signInUser);

// @ POST /api/auth/logout
userRouter.post('/logout', validateUserToken, signOutUser);

// @ GET /api/users/current
userRouter.get('/current', validateUserToken, getCurrentUser);

module.exports = userRouter;
