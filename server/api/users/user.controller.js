//Models
const userModel = require('./user.model');
const recipeModel = require('@api/recipes/recipe.model');
//Utils
const prettyResponse = require('@utils/prettyResponse');

// =============================================================================
// CURRENT USER                                                               ||
// =============================================================================

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

// =============================================================================
// USER CUSTOM RECIPES                                                        ||
// =============================================================================

async function getUserRecipes(req, res, next) {
	try {
		const {
			query: { page, limit },
			user: { userId },
		} = req;

		const options = {
			page,
			limit,
			select: '-ingredients -description -__v',
			populate: [
				{ path: 'category', select: '-_id' },
				{ path: 'cuisine', select: '-_id' },
			],
		};

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

		await userModel.findByIdAndUpdate(
			user._id,
			{ $push: { userRecipes: recipe._id } },
			{ new: true },
		);

		return res.status(201).json(recipe);
	} catch (error) {
		next(error);
	}
}

async function removeRecipe(req, res, next) {
	try {
		const { id } = req.params;
		const user = await userModel.findById(req.user.userId);

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		await recipeModel.findByIdAndDelete({ _id: id });

		await userModel.findByIdAndUpdate(user._id, { $pull: { userRecipes: id } }, { new: true });

		return res.status(204).send();
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

module.exports = {
	getCurrentUser,

	getUserRecipes,
	addRecipe,
	removeRecipe,
	updateRecipe,
};
