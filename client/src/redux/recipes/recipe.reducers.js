//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import recipeActions from './recipe.actions';

//Recipe reducers
const allRecipes = createReducer([], {
	[recipeActions.getAllRecipesSuccess]: (state, { payload }) => payload,
	[recipeActions.getRecipeByQuerySuccess]: (state, { payload }) => payload,
});

const recipeDetails = createReducer(null, {
	[recipeActions.getRecipeByIdSuccess]: (state, { payload }) => payload,
});

const userRecipes = createReducer([], {
	[recipeActions.getUserRecipesSuccess]: (state, { payload }) => [...payload],
});

//Categories reducer
const categories = createReducer([], {
	[recipeActions.getRecipeCategorySuccess]: (state, { payload }) => [...payload],
});

//Cuisines reducer
const cuisines = createReducer([], {
	[recipeActions.getRecipeCuisineSuccess]: (state, { payload }) => [...payload],
});

//Error reducer
const error = createReducer(null, {
	[recipeActions.getAllRecipesFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeByQueryFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeByIdFailure]: (state, { payload }) => payload,
	[recipeActions.getUserRecipesFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeCategoryFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeCuisineFailure]: (state, { payload }) => payload,
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

	[recipeActions.getUserRecipesFailure]: () => true,
	[recipeActions.getUserRecipesSuccess]: () => false,
	[recipeActions.getUserRecipesFailure]: () => false,

	[recipeActions.getRecipeCategoryRequest]: () => true,
	[recipeActions.getRecipeCategorySuccess]: () => false,
	[recipeActions.getRecipeCategoryFailure]: () => false,

	[recipeActions.getRecipeCuisineFailure]: () => true,
	[recipeActions.getRecipeCuisineSuccess]: () => false,
	[recipeActions.getRecipeCuisineFailure]: () => false,
});

export default combineReducers({
	recipeDetails,
	allRecipes,
	userRecipes,
	categories,
	cuisines,
	error,
	loading,
});
