//Validation package
const Joi = require('joi');
//Crypt
const jwt = require('jsonwebtoken');
//Configs
const configs = require('@configs/configs');

//The middleware validate to register user
function validateSignUpUser(req, res, next) {
	const { minNameLength, maxNameLength, minPassLength, maxPassLength } = configs.users;

	const createRegisterRules = Joi.object({
		username: Joi.string().min(minNameLength).max(maxNameLength).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(minPassLength).max(maxPassLength).required(),
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
	const { minPassLength, maxPassLength } = configs.users;

	const createLoginRules = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(minPassLength).max(maxPassLength).required(),
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
	validateSignUpUser,
	validateSignInUser,
	validateToken,

	validateCreateRecipe,
	validateUpdateRecipe,
};
