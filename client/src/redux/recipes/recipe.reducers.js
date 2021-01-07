//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import recipeActions from './recipe.actions';

//Recipe reducers
const items = createReducer([], {
	[recipeActions.getAllRecipesSuccess]: (state, { payload }) => [...state, ...payload],
});

const item = createReducer(null, {
	[recipeActions.getRecipeByQuerySuccess]: (state, { payload }) => payload,
	[recipeActions.getRecipeByIdSuccess]: (state, { payload }) => payload,
});

//Error reducer
const error = createReducer(null, {
	[recipeActions.getAllRecipesFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeByQueryFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeByIdFailure]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[recipeActions.getAllRecipesRequest]: () => true,
	[recipeActions.getAllRecipesSuccess]: () => false,
	[recipeActions.getAllRecipesFailure]: () => false,

	[recipeActions.getRecipeByQueryRequest]: () => true,
	[recipeActions.getRecipeByQuerySuccess]: () => false,
	[recipeActions.getRecipeByQueryFailure]: () => false,

	[recipeActions.getRecipeByIdRequest]: () => true,
	[recipeActions.getRecipeByIdSuccess]: () => false,
	[recipeActions.getRecipeByIdFailure]: () => false,
});

export default combineReducers({
	item,
	items,
	error,
	loading,
});
