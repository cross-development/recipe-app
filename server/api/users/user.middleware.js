//Validation package
const Joi = require('joi');
//Decode jwt
const jwt = require('jsonwebtoken');

//The middleware validate to register user
function validateSignUpUser(req, res, next) {
	const createRegisterRules = Joi.object({
		username: Joi.string().min(3).max(20).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(20).required(),
	});

	const validatedRegister = createRegisterRules.validate(req.body);

	if (validatedRegister.error) {
		const message = validatedRegister.error.details[0].message;

		return res.status(400).json({ message });
	}

	next();
}

//The middleware validate to login user
function validateSignInUser(req, res, next) {
	const createLoginRules = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(20).required(),
	});

	const validatedLogin = createLoginRules.validate(req.body);

	if (validatedLogin.error) {
		const message = validatedLogin.error.details[0].message;

		return res.status(400).json({ message });
	}

	next();
}

//The middleware validate user token
async function validateToken(req, res, next) {
	try {
		const authorizationHeader = req.get('Authorization') || '';
		const token = authorizationHeader.replace('Bearer ', '');

		try {
			const userId = await jwt.verify(token, process.env.JWT_SECRET_KEY).userId;

			req.user = { userId, token };

			next();
		} catch (err) {
			return res.status(401).json({ message: 'Not authorized' });
		}
	} catch (err) {
		next(err);
	}
}

//The middleware validate recipe fields before create
function validateCreateRecipe(req, res, next) {
	const createRecipeRules = Joi.object({
		name: Joi.string().min(2).required(),
		category: Joi.string().min(2).required(),
		cuisine: Joi.string().min(2).required(),
		cookingTime: Joi.string().min(2).required(),
		ingredients: Joi.array().required(),
		description: Joi.string().min(2).required(),
		protein: Joi.number().min(0),
		fat: Joi.number().min(0),
		carbs: Joi.number().min(0),
		kcal: Joi.number().min(0),
	});

	const validatedRecipe = createRecipeRules.validate(req.body);

	if (validatedRecipe.error) {
		return res.status(400).send({ message: 'missing required name field' });
	}

	next();
}

//The middleware validate recipe fields before update
function validateUpdateRecipe(req, res, next) {
	const updateRecipeRules = Joi.object({
		name: Joi.string().min(2),
		category: Joi.string().min(2),
		cuisine: Joi.string().min(2),
		cookingTime: Joi.string().min(2),
		ingredients: Joi.array(),
		description: Joi.string().min(2),
		protein: Joi.number().min(0),
		fat: Joi.number().min(0),
		carbs: Joi.number().min(0),
		kcal: Joi.number().min(0),
	}).min(1);

	const validatedRecipe = updateRecipeRules.validate(req.body);

	if (validatedRecipe.error) {
		return res.status(400).send({ message: 'missing fields' });
	}
}

module.exports = {
	validateSignUpUser,
	validateSignInUser,
	validateToken,

	validateCreateRecipe,
	validateUpdateRecipe,
};
