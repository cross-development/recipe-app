//Core
import { createAction } from '@reduxjs/toolkit';

const getAllIngredientsRequest = createAction('ingredients/getAllIngredientsRequest');
const getAllIngredientsSuccess = createAction('ingredients/getAllIngredientsSuccess');
const getAllIngredientsFailure = createAction('ingredients/getAllIngredientsFailure');

const getIngredientByQueryRequest = createAction('ingredients/getIngredientByQueryRequest');
const getIngredientByQuerySuccess = createAction('ingredients/getIngredientByQuerySuccess');
const getIngredientByQueryFailure = createAction('ingredients/getIngredientByQueryFailure');

const getIngredientByIdRequest = createAction('ingredients/getIngredientByIdRequest');
const getIngredientByIdSuccess = createAction('ingredients/getIngredientByIdSuccess');
const getIngredientByIdFailure = createAction('ingredients/getIngredientByIdFailure');

const ingredientActions = {
	getAllIngredientsRequest,
	getAllIngredientsSuccess,
	getAllIngredientsFailure,

	getIngredientByQueryRequest,
	getIngredientByQuerySuccess,
	getIngredientByQueryFailure,

	getIngredientByIdRequest,
	getIngredientByIdSuccess,
	getIngredientByIdFailure,
};

export default ingredientActions;
