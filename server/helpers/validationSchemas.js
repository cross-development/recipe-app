//Core Mongoose
const {
	Types: { ObjectId },
} = require('mongoose');
//Validate
const Joi = require('joi');
//Configs
const configs = require('../configs');

/**
 * =============== Authentication schemas =====================================
 */
const { minNameLength, maxNameLength, minPassLength, maxPassLength } = configs.users;

const signUpSchema = Joi.object({
	username: Joi.string().min(minNameLength).max(maxNameLength).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(minPassLength).max(maxPassLength).required(),
});

const signInSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(minPassLength).max(maxPassLength).required(),
});

/**
 * =============== Recipe schemas ============================================
 */
const { minTitleLength, minCategoryLength, minCuisineLength } = configs.recipes;
const { minCookingLength, minDescLength, minNutrientsValue } = configs.recipes;

const createRecipeSchema = Joi.object({
	name: Joi.string().min(minTitleLength).required(),
	category: Joi.string().min(minCategoryLength).required(),
	cuisine: Joi.string().min(minCuisineLength).required(),
	cookingTime: Joi.string().min(minCookingLength).required(),
	ingredients: Joi.array().required(),
	description: Joi.string().min(minDescLength).required(),
	protein: Joi.number().min(minNutrientsValue),
	fat: Joi.number().min(minNutrientsValue),
	carbs: Joi.number().min(minNutrientsValue),
	kcal: Joi.number().min(minNutrientsValue),
});

const updateRecipeSchema = Joi.object({
	name: Joi.string().min(minTitleLength),
	category: Joi.string().min(minCategoryLength),
	cuisine: Joi.string().min(minCuisineLength),
	cookingTime: Joi.string().min(minCookingLength),
	ingredients: Joi.array(),
	description: Joi.string().min(minDescLength),
	protein: Joi.number().min(minNutrientsValue),
	fat: Joi.number().min(minNutrientsValue),
	carbs: Joi.number().min(minNutrientsValue),
	kcal: Joi.number().min(minNutrientsValue),
}).min(1);

/**
 * =============== Query schemas =============================================
 */

const { minPageNumber, minLimitNumber, minQueryLength } = configs.queryParams;

const querySchema = Joi.object({
	page: Joi.number().min(minPageNumber).default(minPageNumber),
	limit: Joi.number().min(minLimitNumber).default(minLimitNumber),
	query: Joi.string().min(minQueryLength),
	category: Joi.string(),
});

/**
 * =============== Params schemas =============================================
 */

const { filterEnum } = configs.filter;

const paramSchema = Joi.object({
	filter: Joi.string().valid(...filterEnum),
	id: Joi.string()
		.custom((value, helpers) =>
			!ObjectId.isValid(value) ? helpers.message({ message: 'Invalid id' }) : value,
		)
		.required(),
});

/**
 * =============== ID schemas =================================================
 */

module.exports = {
	signUpSchema,
	signInSchema,

	createRecipeSchema,
	updateRecipeSchema,

	querySchema,
	paramSchema,
};
