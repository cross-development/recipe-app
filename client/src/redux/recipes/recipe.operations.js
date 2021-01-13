//Core
import axios from 'axios';
//Redux
import recipeActions from './recipe.actions';

const getAllRecipes = (page = 1) => dispatch => {
	dispatch(recipeActions.getAllRecipesRequest());

	axios
		.get(`/api/recipes?page=${page}`)
		.then(({ data: { results } }) => dispatch(recipeActions.getAllRecipesSuccess(results)))
		.catch(error => dispatch(recipeActions.getAllRecipesFailure(error)));
};

const getRecipeByQuery = (query, page = 1) => dispatch => {
	dispatch(recipeActions.getRecipeByQueryRequest());

	axios
		.get(`/api/recipes?query=${query}&page=${page}`)
		.then(({ data: { results } }) => dispatch(recipeActions.getRecipeByQuerySuccess(results)))
		.catch(error => dispatch(recipeActions.getRecipeByQueryFailure(error)));
};

const getRecipeById = id => dispatch => {
	dispatch(recipeActions.getRecipeByIdRequest());

	axios
		.get(`/api/recipes/${id}`)
		.then(({ data }) => dispatch(recipeActions.getRecipeByIdSuccess(data)))
		.catch(error => dispatch(recipeActions.getRecipeByIdFailure(error)));
};

const getUserRecipes = () => dispatch => {
	dispatch(recipeActions.getUserRecipesRequest());

	axios
		.get(`/api/users/recipes`)
		.then(({ data: { results } }) => dispatch(recipeActions.getUserRecipesSuccess(results)))
		.catch(error => dispatch(recipeActions.getUserRecipesFailure(error)));
};

const recipeOperations = { getAllRecipes, getRecipeByQuery, getRecipeById, getUserRecipes };
export default recipeOperations;
