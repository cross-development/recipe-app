//Core
import axios from 'axios';
//Redux
import ingredientActions from './ingredient.actions';

const getAllIngredients = (page = 1) => dispatch => {
	dispatch(ingredientActions.getAllIngredientsRequest());

	axios
		.get(`/api/ingredients?page=${page}`)
		.then(({ data: { results } }) => dispatch(ingredientActions.getAllIngredientsSuccess(results)))
		.catch(error => dispatch(ingredientActions.getAllIngredientsFailure(error)));
};

const getIngredientByQuery = (query, page = 1) => dispatch => {
	dispatch(ingredientActions.getIngredientByQueryRequest());

	axios
		.get(`/api/ingredients?query=${query}&page=${page}`)
		.then(({ data: { results } }) =>
			dispatch(ingredientActions.getIngredientByQuerySuccess(results)),
		)
		.catch(error => dispatch(ingredientActions.getIngredientByQueryFailure(error)));
};

const getIngredientById = id => dispatch => {
	dispatch(ingredientActions.getIngredientByIdRequest());

	axios
		.get(`/api/ingredients/${id}`)
		.then(data => dispatch(ingredientActions.getIngredientByIdSuccess(data)))
		.catch(error => dispatch(ingredientActions.getIngredientByIdFailure(error)));
};

const ingredientOperations = { getAllIngredients, getIngredientByQuery, getIngredientById };
export default ingredientOperations;
