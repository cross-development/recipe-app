//Models
const userModel = require('./user.model');
const recipeModel = require('../recipes/recipe.model');
//Crypt
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//Utils
const prettyResponse = require('../../utils/prettyResponse');

async function singUpUser(req, res, next) {
	try {
		const { username, email, password } = req.body;

		const existedUser = await userModel.findOne({ email });

		if (existedUser) {
			return res.status(409).json({ message: 'Email in use' });
		}

		const passwordHash = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_ROUND));
		const user = await userModel.create({ username, email, password: passwordHash });

		return res.status(201).json({ username: user.username, email: user.email });
	} catch (error) {
		next(error);
	}
}

async function signInUser(req, res, next) {
	try {
		const { email, password } = req.body;

		const user = await userModel.findOne({ email });

		if (!user) {
			return res.status(401).json({ message: 'Email or password is wrong' });
		}

		const isUserPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isUserPasswordCorrect) {
			return res.status(401).json({ message: 'Email or password is wrong' });
		}

		const userToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
			expiresIn: process.env.EXPIRES_IN,
		});

		await userModel.findByIdAndUpdate(user._id, { token: userToken });

		const response = {
			user: {
				username: user.username,
				email: user.email,
				subscription: user.subscription,
			},
			token: userToken,
		};

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function signOutUser(req, res, next) {
	try {
		const { userId, token } = req.user;
		const user = await userModel.findById(userId);

		if (!user || user.token !== token) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		await userModel.findByIdAndUpdate(user._id, { token: '' });

		return res.status(204).send();
	} catch (error) {
		next(error);
	}
}

async function getCurrentUser(req, res, next) {
	try {
		const user = await userModel
			.findById(req.user.userId)
			.populate({ path: 'favIngredients', select: 'name' })
			.populate({ path: 'recipes', select: '-ingredients -description -__v' });

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		return res.status(200).json({ userId: user._id, username: user.username, email: user.email });
	} catch (error) {
		next(error);
	}
}

async function getUserRecipes(req, res, next) {
	try {
		const {
			query: { page, limit },
			user: { userId },
		} = req;

		const options = { page, limit, select: '-ingredients -description -__v' };

		const results = await recipeModel.paginate({ authorID: userId }, options);
		const response = prettyResponse(results);

		!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function addRecipe(req, res, next) {
	try {
		const user = await userModel.findById(req.user.userId);

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		const recipe = await recipeModel.create({ ...req.body, authorID: user._id });

		await userModel.findByIdAndUpdate(user._id, { $push: { recipes: recipe._id } }, { new: true });

		return res.status(201).json(recipe);
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

async function addIngredientToFav(req, res, next) {
	try {
		const { id } = req.params;
		const user = await userModel.findById(req.user.userId);

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		if (user.favIngredients.includes(id)) {
			return res.status(409).json({ message: 'Ingredient already exists' });
		}

		const updatedUser = await userModel.findByIdAndUpdate(
			user._id,
			{ $push: { favIngredients: id } },
			{ new: true },
		);

		return res.status(201).json({ favIngredients: updatedUser.favIngredients });
	} catch (error) {
		next(error);
	}
}

async function removeIngredientFromFav(req, res, next) {
	try {
		const { id } = req.params;
		const user = await userModel.findById(req.user.userId);

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		if (!user.favIngredients.includes(id)) {
			return res.status(404).json({ message: 'Ingredient not found' });
		}

		await userModel.findByIdAndUpdate(user._id, { $pull: { favIngredients: id } }, { new: true });

		return res.status(200).json({ id });
	} catch (error) {
		next(error);
	}
}

module.exports = {
	singUpUser,
	signInUser,
	signOutUser,

	getCurrentUser,

	getUserRecipes,
	addRecipe,
	removeRecipe,
	updateRecipe,

	addIngredientToFav,
	removeIngredientFromFav,
};
