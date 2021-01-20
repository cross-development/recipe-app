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

const addUserRecipeRequest = createAction('recipes/addUserRecipeRequest');
const addUserRecipeSuccess = createAction('recipes/addUserRecipeSuccess');
const addUserRecipeFailure = createAction('recipes/addUserRecipeFailure');

const removeUserRecipeRequest = createAction('recipes/removeUserRecipeRequest');
const removeUserRecipeSuccess = createAction('recipes/removeUserRecipeSuccess');
const removeUserRecipeFailure = createAction('recipes/removeUserRecipeFailure');

const getRecipeCategoryRequest = createAction('recipes/getRecipeCategoryRequest');
const getRecipeCategorySuccess = createAction('recipes/getRecipeCategorySuccess');
const getRecipeCategoryFailure = createAction('recipes/getRecipeCategoryFailure');

const getRecipeCuisineRequest = createAction('recipes/getRecipeCuisineRequest');
const getRecipeCuisineSuccess = createAction('recipes/getRecipeCuisineSuccess');
const getRecipeCuisineFailure = createAction('recipes/getRecipeCuisineFailure');

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

	addUserRecipeRequest,
	addUserRecipeSuccess,
	addUserRecipeFailure,

	removeUserRecipeRequest,
	removeUserRecipeSuccess,
	removeUserRecipeFailure,

	getRecipeCategoryRequest,
	getRecipeCategorySuccess,
	getRecipeCategoryFailure,

	getRecipeCuisineRequest,
	getRecipeCuisineSuccess,
	getRecipeCuisineFailure,
};
export default recipeActions;
