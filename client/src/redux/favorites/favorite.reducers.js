//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import favoriteActions from './favorite.actions';

//Handler reducers
const getFavHandler = (state, { payload }) => [...payload];
const addFavHandler = (state, { payload }) => [...state, payload];
const removeFavHandler = (state, { payload }) => state.filter(({ _id }) => _id !== payload);

//FavIngredients reducer
const favIngredients = createReducer([], {
	[favoriteActions.getFavIngredientsSuccess]: getFavHandler,
	[favoriteActions.addFavIngredientSuccess]: addFavHandler,
	[favoriteActions.removeFavIngredientSuccess]: removeFavHandler,
});

//FavRecipes reducer
const favRecipes = createReducer([], {
	[favoriteActions.getFavRecipesSuccess]: getFavHandler,
	[favoriteActions.addFavRecipeSuccess]: addFavHandler,
	[favoriteActions.removeFavRecipeSuccess]: removeFavHandler,
});

//Error reducer
const error = createReducer(null, {
	[favoriteActions.getFavIngredientsFailure]: (state, { payload }) => payload,
	[favoriteActions.addFavIngredientFailure]: (state, { payload }) => payload,
	[favoriteActions.removeFavIngredientFailure]: (state, { payload }) => payload,

	[favoriteActions.getFavRecipesFailure]: (state, { payload }) => payload,
	[favoriteActions.addFavRecipeFailure]: (state, { payload }) => payload,
	[favoriteActions.removeFavRecipeFailure]: (state, { payload }) => payload,
});

//Loading reducer
const loading = createReducer(false, {
	[favoriteActions.getFavIngredientsRequest]: () => true,
	[favoriteActions.getFavIngredientsSuccess]: () => false,
	[favoriteActions.getFavIngredientsFailure]: () => false,

	[favoriteActions.addFavIngredientRequest]: () => true,
	[favoriteActions.addFavIngredientSuccess]: () => false,
	[favoriteActions.addFavIngredientFailure]: () => false,

	[favoriteActions.removeFavIngredientRequest]: () => true,
	[favoriteActions.removeFavIngredientSuccess]: () => false,
	[favoriteActions.removeFavIngredientFailure]: () => false,

	[favoriteActions.getFavRecipesRequest]: () => true,
	[favoriteActions.getFavRecipesSuccess]: () => false,
	[favoriteActions.getFavRecipesFailure]: () => false,

	[favoriteActions.addFavRecipeRequest]: () => true,
	[favoriteActions.addFavRecipeSuccess]: () => false,
	[favoriteActions.addFavRecipeFailure]: () => false,

	[favoriteActions.removeFavRecipeRequest]: () => true,
	[favoriteActions.removeFavRecipeSuccess]: () => false,
	[favoriteActions.removeFavRecipeFailure]: () => false,
});

export default combineReducers({
	favIngredients,
	favRecipes,
	error,
	loading,
});
