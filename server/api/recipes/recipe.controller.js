//Model
const recipeModel = require('./recipe.model');

async function getAllRecipes(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function getRecipeById(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function addRecipe(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function removeRecipe(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function updateRecipe(req, res, next) {
	try {
	} catch (error) {
		next(error);
	}
}

async function paginationRecipes(req, res, next) {}

async function filtrationRecipes(req, res, next) {}

module.exports = {
	getAllRecipes,
	getRecipeById,
	addRecipe,
	removeRecipe,
	updateRecipe,
	paginationRecipes,
	filtrationRecipes,
};
