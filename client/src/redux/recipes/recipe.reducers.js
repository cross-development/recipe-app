//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import recipeActions from './recipe.actions';

const initialRecipesState = {
	results: [],
	limitResults: 10,
	totalResults: 0,
	page: 1,
	totalPages: 1,
};

//Recipe reducers
const allRecipes = createReducer(initialRecipesState, {
	[recipeActions.getAllRecipesSuccess]: (state, { payload }) => ({ ...payload }),
	[recipeActions.getRecipeByQuerySuccess]: (state, { payload }) => ({ ...payload }),
	[recipeActions.getRecipesByFilterSuccess]: (state, { payload }) => ({ ...payload }),
});

const removeRecipeHandler = (state, { payload }) => state.filter(({ _id }) => _id !== payload);

const userRecipes = createReducer([], {
	[recipeActions.getUserRecipesSuccess]: (state, { payload }) => [...payload],
	[recipeActions.addUserRecipeSuccess]: (state, { payload }) => [...state, payload],
	[recipeActions.removeUserRecipeSuccess]: removeRecipeHandler,
});

const recipeDetails = createReducer(null, {
	[recipeActions.getRecipeByIdSuccess]: (state, { payload }) => payload,
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
	[recipeActions.getRecipesByFilterFailure]: (state, { payload }) => payload,
	[recipeActions.getRecipeByIdFailure]: (state, { payload }) => payload,
	[recipeActions.getUserRecipesFailure]: (state, { payload }) => payload,
	[recipeActions.addUserRecipeFailure]: (state, { payload }) => payload,
	[recipeActions.removeUserRecipeFailure]: (state, { payload }) => payload,
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

	[recipeActions.getRecipesByFilterRequest]: () => true,
	[recipeActions.getRecipesByFilterSuccess]: () => false,
	[recipeActions.getRecipesByFilterFailure]: () => false,

	[recipeActions.getRecipeByIdRequest]: () => true,
	[recipeActions.getRecipeByIdSuccess]: () => false,
	[recipeActions.getRecipeByIdFailure]: () => false,

	[recipeActions.getUserRecipesFailure]: () => true,
	[recipeActions.getUserRecipesSuccess]: () => false,
	[recipeActions.getUserRecipesFailure]: () => false,

	[recipeActions.addUserRecipeRequest]: () => true,
	[recipeActions.addUserRecipeSuccess]: () => false,
	[recipeActions.addUserRecipeFailure]: () => false,

	[recipeActions.removeUserRecipeRequest]: () => true,
	[recipeActions.removeUserRecipeSuccess]: () => false,
	[recipeActions.removeUserRecipeFailure]: () => false,

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
