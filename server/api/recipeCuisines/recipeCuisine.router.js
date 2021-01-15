//Core
const { Router } = require('express');
//Controller
const recipeCuisineController = require('./recipeCuisine.controller');

const recipeCuisineRouter = Router();

// @ GET /api/recipe-cuisines
recipeCuisineRouter.get('/', recipeCuisineController.getRecipesCuisines);

module.exports = recipeCuisineRouter;
