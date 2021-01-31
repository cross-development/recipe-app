//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import ingredientActions from './ingredient.actions';

const initialIngredientsState = {
	results: [],
	limitResults: 10,
	totalResults: 0,
	page: 1,
	totalPages: 1,
};

//Ingredient reducers
const allIngredients = createReducer(initialIngredientsState, {
	[ingredientActions.getAllIngredientsSuccess]: (state, { payload }) => ({ ...payload }),
	[ingredientActions.getIngredientByQuerySuccess]: (state, { payload }) => ({ ...payload }),
});

const ingredientDetails = createReducer(null, {
	[ingredientActions.getIngredientByIdSuccess]: (state, { payload }) => payload,
});

//Categories reducer
const categories = createReducer([], {
	[ingredientActions.getIngredientCategorySuccess]: (state, { payload }) => [...payload],
});

//Error reducer
const error = createReducer(null, {
	[ingredientActions.getAllIngredientsFailure]: (state, { payload }) => payload,
	[ingredientActions.getIngredientByQueryFailure]: (state, { payload }) => payload,
	[ingredientActions.getIngredientByIdFailure]: (state, { payload }) => payload,
	[ingredientActions.getIngredientCategoryFailure]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[ingredientActions.getAllIngredientsRequest]: () => true,
	[ingredientActions.getAllIngredientsSuccess]: () => false,
	[ingredientActions.getAllIngredientsFailure]: () => false,

	[ingredientActions.getIngredientByQueryRequest]: () => true,
	[ingredientActions.getIngredientByQuerySuccess]: () => false,
	[ingredientActions.getIngredientByQueryFailure]: () => false,

	[ingredientActions.getIngredientByIdRequest]: () => true,
	[ingredientActions.getIngredientByIdSuccess]: () => false,
	[ingredientActions.getIngredientByIdFailure]: () => false,

	[ingredientActions.getIngredientCategoryRequest]: () => true,
	[ingredientActions.getIngredientCategorySuccess]: () => false,
	[ingredientActions.getIngredientCategoryFailure]: () => false,
});

export default combineReducers({
	ingredientDetails,
	allIngredients,
	categories,
	error,
	loading,
});
