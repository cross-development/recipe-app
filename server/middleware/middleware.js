//Core
const {
	Types: { ObjectId },
} = require('mongoose');
//Validate
const Joi = require('joi');
//Configs
const configs = require('../configs/configs');

function validateQueryParams(req, res, next) {
	const { minPageNumber, minLimitNumber, minQueryLength } = configs.queryParams;

	const createQueryRules = Joi.object({
		page: Joi.number().min(minPageNumber).default(minPageNumber),
		limit: Joi.number().min(minLimitNumber).default(minLimitNumber),
		query: Joi.string().min(minQueryLength),
	});

	const validatedQueryParams = createQueryRules.validate(req.query);

	if (validatedQueryParams.error) {
		const message = validatedQueryParams.error.details[0].message;

		return res.status(400).json({ message });
	}

	req.query = validatedQueryParams.value;

	next();
}

function validateId(req, res, next) {
	const { id } = req.params;

	if (!ObjectId.isValid(id)) {
		return res.status(400).send({ message: 'invalid id' });
	}

	next();
}

module.exports = {
	validateQueryParams,
	validateId,
};
