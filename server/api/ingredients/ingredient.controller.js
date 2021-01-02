//Model
const ingredientModel = require('./ingredient.model');

async function getAllIngredients(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function getIngredientById(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function addIngredient(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function removeIngredient(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function updateIngredient(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function paginationIngredients(req, res, next) {}

async function filtrationIngredients(req, res, next) {}

module.exports = {
	getAllIngredients,
	getIngredientById,
	addIngredient,
	removeIngredient,
	updateIngredient,
	paginationIngredients,
	filtrationIngredients,
};
