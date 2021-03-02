//Core
const { Router } = require('express');
//Controller
const { getRecipesCuisines } = require('./recipeCuisine.controller');
//Helpers
const tryCatchHandler = require('../../helpers/tryCatchHandler');

const recipeCuisineRouter = Router();

// @ GET /api/recipe-cuisines
recipeCuisineRouter.get('/', tryCatchHandler(getRecipesCuisines));

module.exports = recipeCuisineRouter;
