//Core
import axios from 'axios';
//Redux
import favoriteActions from './favorite.actions';

const getFavIngredients = () => dispatch => {
	dispatch(favoriteActions.getFavIngredientsRequest());

	axios
		.get('/api/favorites/ingredients')
		.then(({ data: { results } }) => dispatch(favoriteActions.getFavIngredientsSuccess(results)))
		.catch(error => dispatch(favoriteActions.getFavIngredientsFailure(error)));
};

const addFavIngredient = ingredientId => dispatch => {
	dispatch(favoriteActions.addFavIngredientRequest());

	axios
		.patch(`/api/favorites/ingredients/${ingredientId}`)
		.then(({ data }) => dispatch(favoriteActions.addFavIngredientSuccess(data)))
		.catch(error => dispatch(favoriteActions.addFavIngredientFailure(error)));
};

const removeFavIngredient = ingredientId => dispatch => {
	dispatch(favoriteActions.removeFavIngredientRequest());

	axios
		.delete(`/api/favorites/ingredients/${ingredientId}`)
		.then(() => dispatch(favoriteActions.removeFavIngredientSuccess(ingredientId)))
		.catch(error => dispatch(favoriteActions.removeFavIngredientFailure(error)));
};

const getFavRecipes = () => dispatch => {
	dispatch(favoriteActions.getFavRecipesRequest());

	axios
		.get('/api/favorites/recipes')
		.then(({ data: { results } }) => dispatch(favoriteActions.getFavRecipesSuccess(results)))
		.catch(error => dispatch(favoriteActions.getFavRecipesFailure(error)));
};

const addFavRecipe = recipeId => dispatch => {
	dispatch(favoriteActions.addFavRecipeRequest());

	axios
		.patch(`/api/favorites/recipes/${recipeId}`)
		.then(({ data }) => dispatch(favoriteActions.addFavRecipeSuccess(data)))
		.catch(error => dispatch(favoriteActions.addFavRecipeFailure(error)));
};

const removeFavRecipe = recipeId => dispatch => {
	dispatch(favoriteActions.removeFavRecipeRequest());

	axios
		.delete(`/api/favorites/recipes/${recipeId}`)
		.then(() => dispatch(favoriteActions.removeFavRecipeSuccess(recipeId)))
		.catch(error => dispatch(favoriteActions.removeFavRecipeFailure(error)));
};

const favoriteOperations = {
	getFavIngredients,
	addFavIngredient,
	removeFavIngredient,

	getFavRecipes,
	addFavRecipe,
	removeFavRecipe,
};

export default favoriteOperations;
