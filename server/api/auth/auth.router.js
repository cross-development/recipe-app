//Core Express
const { Router } = require('express');
//Controller
const authController = require('./auth.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { singUpUser, signInUser, signOutUser } = authController;
const { verifyEmailToken, validateToken } = authController;
const { signUpSchema, signInSchema } = validationSchemas;

const authRouter = Router();

// @ POST /api/auth/register
authRouter.post('/register', validate(signUpSchema), tryCatchHandler(singUpUser));

// @ POST /api/auth/login
authRouter.post('/login', validate(signInSchema), tryCatchHandler(signInUser));

// @ POST /api/auth/logout
authRouter.post('/logout', tryCatchHandler(validateToken), tryCatchHandler(signOutUser));

// @ GET /api/auth/verify/:verificationToken
authRouter.get('/verify/:verificationToken', tryCatchHandler(verifyEmailToken));

module.exports = authRouter;
