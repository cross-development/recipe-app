//Core
import axios from 'axios';
//Redux
import recipeActions from './recipe.actions';

const getAllRecipes = (page = 1) => dispatch => {
	dispatch(recipeActions.getAllRecipesRequest());

	axios
		.get(`/api/recipes?page=${page}`)
		.then(({ data }) => dispatch(recipeActions.getAllRecipesSuccess(data)))
		.catch(error => dispatch(recipeActions.getAllRecipesFailure(error)));
};

const getRecipeByQuery = (query, page = 1) => dispatch => {
	dispatch(recipeActions.getRecipeByQueryRequest());

	axios
		.get(`/api/recipes?query=${query}&page=${page}`)
		.then(({ data }) => dispatch(recipeActions.getRecipeByQuerySuccess(data)))
		.catch(error => dispatch(recipeActions.getRecipeByQueryFailure(error)));
};

const getRecipesByFilter = (category, itemId, page = 1) => dispatch => {
	dispatch(recipeActions.getRecipesByFilterRequest());

	axios
		.get(`/api/recipes/${category}/${itemId}?page=${page}`)
		.then(({ data }) => dispatch(recipeActions.getRecipesByFilterSuccess(data)))
		.catch(error => dispatch(recipeActions.getRecipesByFilterFailure(error)));
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

const addUserRecipe = ({ credential }) => dispatch => {
	dispatch(recipeActions.addUserRecipeRequest());

	axios
		.post('/api/users/recipes', credential)
		.then(({ data }) => dispatch(recipeActions.addUserRecipeSuccess(data)))
		.catch(error => dispatch(recipeActions.addUserRecipeFailure(error)));
};

const removeUserRecipe = recipeId => dispatch => {
	dispatch(recipeActions.removeUserRecipeRequest());

	axios
		.delete(`/api/users/recipes/${recipeId}`)
		.then(() => dispatch(recipeActions.removeUserRecipeSuccess(recipeId)))
		.catch(error => dispatch(recipeActions.removeUserRecipeFailure(error)));
};

const getRecipesInfo = () => dispatch => {
	dispatch(recipeActions.getRecipeCategoryRequest());

	axios
		.get('/api/recipes/info')
		.then(({ data }) => {
			dispatch(recipeActions.getRecipeCuisineSuccess(data.cuisines));
			dispatch(recipeActions.getRecipeCategorySuccess(data.categories));
		})
		.catch(error => dispatch(recipeActions.getRecipeCategoryFailure(error)));
};

// const getRecipesCategories = () => dispatch => {
// 	dispatch(recipeActions.getRecipeCategoryRequest());

// 	axios
// 		.get('/api/recipe-categories')
// 		.then(({ data }) => dispatch(recipeActions.getRecipeCategorySuccess(data)))
// 		.catch(error => dispatch(recipeActions.getRecipeCategoryFailure(error)));
// };

// const getRecipesCuisines = () => dispatch => {
// 	dispatch(recipeActions.getRecipeCuisineRequest());

// 	axios
// 		.get('/api/recipe-cuisines')
// 		.then(({ data }) => dispatch(recipeActions.getRecipeCuisineSuccess(data)))
// 		.catch(error => dispatch(recipeActions.getRecipeCuisineFailure(error)));
// };

const recipeOperations = {
	getAllRecipes,
	getRecipeByQuery,
	getRecipesByFilter,
	getRecipeById,
	getUserRecipes,
	addUserRecipe,
	removeUserRecipe,
	getRecipesInfo,
	// getRecipesCategories,
	// getRecipesCuisines,
};

export default recipeOperations;
