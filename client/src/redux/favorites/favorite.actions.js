//Core
import { createAction } from '@reduxjs/toolkit';

const getFavIngredientsRequest = createAction('favorites/getFavIngredientsRequest');
const getFavIngredientsSuccess = createAction('favorites/getFavIngredientsSuccess');
const getFavIngredientsFailure = createAction('favorites/getFavIngredientsFailure');

const addFavIngredientRequest = createAction('favorites/addFavIngredientRequest');
const addFavIngredientSuccess = createAction('favorites/addFavIngredientSuccess');
const addFavIngredientFailure = createAction('favorites/addFavIngredientFailure');

const removeFavIngredientRequest = createAction('favorites/removeFavIngredientRequest');
const removeFavIngredientSuccess = createAction('favorites/removeFavIngredientSuccess');
const removeFavIngredientFailure = createAction('favorites/removeFavIngredientFailure');

const getFavRecipesRequest = createAction('favorites/getFavRecipesRequest');
const getFavRecipesSuccess = createAction('favorites/getFavRecipesSuccess');
const getFavRecipesFailure = createAction('favorites/getFavRecipesFailure');

const addFavRecipeRequest = createAction('favorites/addFavRecipeRequest');
const addFavRecipeSuccess = createAction('favorites/addFavRecipeSuccess');
const addFavRecipeFailure = createAction('favorites/addFavRecipeFailure');

const removeFavRecipeRequest = createAction('favorites/removeFavRecipeRequest');
const removeFavRecipeSuccess = createAction('favorites/removeFavRecipeSuccess');
const removeFavRecipeFailure = createAction('favorites/removeFavRecipeFailure');

const favoriteActions = {
	getFavIngredientsRequest,
	getFavIngredientsSuccess,
	getFavIngredientsFailure,

	addFavIngredientRequest,
	addFavIngredientSuccess,
	addFavIngredientFailure,

	removeFavIngredientRequest,
	removeFavIngredientSuccess,
	removeFavIngredientFailure,

	getFavRecipesRequest,
	getFavRecipesSuccess,
	getFavRecipesFailure,

	addFavRecipeRequest,
	addFavRecipeSuccess,
	addFavRecipeFailure,

	removeFavRecipeRequest,
	removeFavRecipeSuccess,
	removeFavRecipeFailure,
};

export default favoriteActions;
