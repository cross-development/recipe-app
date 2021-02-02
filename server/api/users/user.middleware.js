//Validation package
const Joi = require('joi');
//Configs
const configs = require('../../configs');

//The middleware validate recipe fields before create
function validateCreateRecipe(req, res, next) {
	const { minNameLength, minCategoryLength, minCuisineLength } = configs.recipes;
	const { minCookingLength, minDescLength, minNutrientsValue } = configs.recipes;

	const createRecipeRules = Joi.object({
		name: Joi.string().min(minNameLength).required(),
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

	const validatedRecipe = createRecipeRules.validate(req.body);

	if (validatedRecipe.error) {
		return res.status(400).send({ message: 'missing required name field' });
	}

	next();
}

//The middleware validate recipe fields before update
function validateUpdateRecipe(req, res, next) {
	const { minNameLength, minCategoryLength, minCuisineLength } = configs.recipes;
	const { minCookingLength, minDescLength, minNutrientsValue } = configs.recipes;

	const updateRecipeRules = Joi.object({
		name: Joi.string().min(minNameLength),
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

	const validatedRecipe = updateRecipeRules.validate(req.body);

	if (validatedRecipe.error) {
		return res.status(400).send({ message: 'missing fields' });
	}
}

module.exports = {
	validateCreateRecipe,
	validateUpdateRecipe,
};
