//Core
const { Router } = require('express');
//Controller
const authController = require('./auth.controller');
//Middleware
const authMiddleware = require('./auth.middleware');
const validators = require('../../middleware/validators');

const { singUpUser, signInUser, signOutUser } = authController;
const { validateSignUpUser, validateSignInUser } = authMiddleware;
const { validateToken } = validators;

const authRouter = Router();

// @ POST /api/auth/register
authRouter.post('/register', validateSignUpUser, singUpUser);

// @ POST /api/auth/login
authRouter.post('/login', validateSignInUser, signInUser);

// @ POST /api/auth/logout
authRouter.post('/logout', validateToken, signOutUser);

module.exports = authRouter;
