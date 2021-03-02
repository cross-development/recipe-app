//Core
const { Router } = require('express');
//Controller
const ingredientController = require('./ingredient.controller');
//Helpers
const validate = require('../../helpers/validate');
const tryCatchHandler = require('../../helpers/tryCatchHandler');
const validationSchemas = require('../../helpers/validationSchemas');

const { getAllIngredients, getIngredientById } = ingredientController;
const { idSchema, querySchema } = validationSchemas;

const ingredientRouter = Router();

// @ GET /api/ingredients
ingredientRouter.get('/', validate(querySchema, 'query'), tryCatchHandler(getAllIngredients));

// @ GET /api/ingredients/:id
ingredientRouter.get('/:id', validate(idSchema, 'params'), tryCatchHandler(getIngredientById));

module.exports = ingredientRouter;
