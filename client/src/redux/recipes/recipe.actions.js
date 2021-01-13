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

const getUserRecipesRequest = createAction('recipes/getUserRecipesRequest');
const getUserRecipesSuccess = createAction('recipes/getUserRecipesSuccess');
const getUserRecipesFailure = createAction('recipes/getUserRecipesFailure');

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

	getUserRecipesRequest,
	getUserRecipesSuccess,
	getUserRecipesFailure,
};
export default recipeActions;
