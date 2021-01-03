//Validation package
const Joi = require('joi');
//Mongoose validation ObjID
const {
	Types: { ObjectId },
} = require('mongoose');

function validateCreateIngredient(req, res, next) {
	const createIngredientRules = Joi.object({
		name: Joi.string().min(2).required(),
		protein: Joi.number().min(1).required(),
		fat: Joi.number().min(1).required(),
		carbs: Joi.number().min(1).required(),
		kcal: Joi.number().min(1).required(),
	});

	const validatedIngredient = createIngredientRules.validate(req.body);

	if (validatedIngredient.error) {
		return res.status(400).send({ message: 'missing required name field' });
	}

	next();
}

function validateUpdateIngredient(req, res, next) {
	const updateIngredientRules = Joi.object({
		name: Joi.string().min(2),
		protein: Joi.number().min(1),
		fat: Joi.number().min(1),
		carbs: Joi.number().min(1),
		kcal: Joi.number().min(1),
	}).min(1);

	const validatedIngredient = updateIngredientRules.validate(req.body);

	if (validatedIngredient.error) {
		return res.status(400).send({ message: 'missing fields' });
	}

	next();
}

function validateIngredientId(req, res, next) {
	const { id } = req.params;

	if (!ObjectId.isValid(id)) {
		return res.status(400).send({ message: 'invalid id' });
	}

	next();
}

function validateIngredientQuery(req, res, next) {
	const { query } = req.query;

	if (!query || query.length < 2) {
		return res.status(400).send({ message: 'invalid query' });
	}

	next();
}

function validateIngredientPage(req, res, next) {
	const { page } = req.query;

	if (!page && page !== '') {
		return next();
	}

	const defaultPage = 1;
	const isPageValid = Number(page) && Number(page) >= defaultPage;

	if (!isPageValid) {
		return res.status(400).send({ message: 'invalid page' });
	}

	next();
}

module.exports = {
	validateCreateIngredient,
	validateUpdateIngredient,
	validateIngredientId,
	validateIngredientQuery,
	validateIngredientPage,
};
