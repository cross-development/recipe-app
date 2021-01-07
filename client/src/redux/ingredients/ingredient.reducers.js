//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import ingredientActions from './ingredient.actions';

//Ingredient reducers
const items = createReducer([], {
	[ingredientActions.getAllIngredientsSuccess]: (state, { payload }) => [...state, ...payload],
});

const item = createReducer(null, {
	[ingredientActions.getIngredientByQuerySuccess]: (state, { payload }) => payload,
	[ingredientActions.getIngredientByIdSuccess]: (state, { payload }) => payload,
});

//Error reducer
const error = createReducer(null, {
	[ingredientActions.getAllIngredientsFailure]: (state, { payload }) => payload,
	[ingredientActions.getIngredientByQueryFailure]: (state, { payload }) => payload,
	[ingredientActions.getIngredientByIdFailure]: (state, { payload }) => payload,
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
});

export default combineReducers({
	item,
	items,
	error,
	loading,
});
