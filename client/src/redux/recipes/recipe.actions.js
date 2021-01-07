//Core
import { createAction } from '@reduxjs/toolkit';

const getAllRecipesRequest = createAction('recipes/getAllRecipesRequest');
const getAllRecipesSuccess = createAction('recipes/getAllRecipesSuccess');
const getAllRecipesFailure = createAction('recipes/getAllRecipesFailure');

const getRecipeByQueryRequest = createAction('recipes/getRecipeByQueryRequest');
const getRecipeByQuerySuccess = createAction('recipes/getRecipeByQuerySuccess');
const getRecipeByQueryFailure = createAction('recipes/getRecipeByQueryFailure');

const getRecipeByIdRequest = createAction('recipes/getRecipeByIdRequest');
const getRecipeByIdSuccess = createAction('recipes/getRecipeByIdSuccess');
const getRecipeByIdFailure = createAction('recipes/getRecipeByIdFailure');

const recipeActions = {
	getAllRecipesRequest,
	getAllRecipesSuccess,
	getAllRecipesFailure,

	getRecipeByQueryRequest,
	getRecipeByQuerySuccess,
	getRecipeByQueryFailure,

	getRecipeByIdRequest,
	getRecipeByIdSuccess,
	getRecipeByIdFailure,
};
export default recipeActions;
