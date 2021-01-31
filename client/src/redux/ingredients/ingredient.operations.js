//Core
import axios from 'axios';
//Redux
import ingredientActions from './ingredient.actions';

const getAllIngredients = (page = 1) => dispatch => {
	dispatch(ingredientActions.getAllIngredientsRequest());

	axios
		.get(`/api/ingredients?page=${page}`)
		.then(({ data }) => dispatch(ingredientActions.getAllIngredientsSuccess(data)))
		.catch(error => dispatch(ingredientActions.getAllIngredientsFailure(error)));
};

const getIngredientByQuery = (query, category, page = 1) => dispatch => {
	dispatch(ingredientActions.getIngredientByQueryRequest());

	axios
		.get(`/api/ingredients?category=${category}&query=${query}&page=${page}`)
		.then(({ data }) => dispatch(ingredientActions.getIngredientByQuerySuccess(data)))
		.catch(error => dispatch(ingredientActions.getIngredientByQueryFailure(error)));
};

const getIngredientById = id => dispatch => {
	dispatch(ingredientActions.getIngredientByIdRequest());

	axios
		.get(`/api/ingredients/${id}`)
		.then(({ data }) => dispatch(ingredientActions.getIngredientByIdSuccess(data)))
		.catch(error => dispatch(ingredientActions.getIngredientByIdFailure(error)));
};

const getIngredientsCategories = () => dispatch => {
	dispatch(ingredientActions.getIngredientCategoryRequest());

	axios
		.get('/api/ingredient-categories')
		.then(({ data }) => dispatch(ingredientActions.getIngredientCategorySuccess(data)))
		.catch(error => dispatch(ingredientActions.getIngredientCategoryFailure(error)));
};

const ingredientOperations = {
	getAllIngredients,
	getIngredientByQuery,
	getIngredientById,
	getIngredientsCategories,
};

export default ingredientOperations;
