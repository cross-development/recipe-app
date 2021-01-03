//Validation package
const Joi = require('joi');

function validateCreateRecipe(req, res, next) {
	const createRecipeRules = Joi.object({});

	const validatedRecipe = createRecipeRules.validate(req.body);

	if (validatedRecipe.error) {
		return res.status(400).send({ message: 'missing required name field' });
	}

	next();
}

function validateUpdateRecipe(req, res, next) {
	const updateRecipeRules = Joi.object({}).min(1);

	const validatedRecipe = updateRecipeRules.validate(req.body);

	if (validatedRecipe.error) {
		return res.status(400).send({ message: 'missing fields' });
	}
}

function validateRecipeId(req, res, next) {
	const { id } = req.params;

	if (!ObjectId.isValid(id)) {
		return res.status(400).send({ message: 'invalid id' });
	}

	next();
}

function validateRecipeQuery(req, res, next) {}

module.exports = {
	validateCreateRecipe,
	validateUpdateRecipe,
	validateRecipeId,
	validateRecipeQuery,
};
