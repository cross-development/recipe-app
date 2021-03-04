//Models
const userModel = require('./user.model');
const recipeModel = require('../recipes/recipe.model');
//Utils
const prettyResponse = require('../../utils/prettyResponse');

// =============================================================================
// CURRENT USER                                                               ||
// =============================================================================

async function getCurrentUser(req, res) {
	const user = await userModel
		.findById(req.user._id)
		.populate({ path: 'favIngredients', select: 'name' })
		.populate({ path: 'recipes', select: '-ingredients -description -__v' });

	if (!user) {
		return res.status(401).json({ message: 'Not authorized' });
	}

	return res.status(200).json({ userId: user._id, username: user.username, email: user.email });
}

// =============================================================================
// USER CUSTOM RECIPES                                                        ||
// =============================================================================

async function getUserRecipes(req, res) {
	const {
		query: { page, limit },
		user: { _id },
	} = req;

	const options = {
		page: page || 1,
		limit: limit || 10,
		select: '-ingredients -description -__v',
		populate: [
			{ path: 'category', select: '-_id' },
			{ path: 'cuisine', select: '-_id' },
		],
	};

	const results = await recipeModel.paginate({ authorID: _id }, options);
	const response = prettyResponse(results);

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

async function addRecipe(req, res) {
	const user = await userModel.findById(req.user._id);

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
}

async function removeRecipe(req, res) {
	const { id } = req.params;
	const user = await userModel.findById(req.user._id);

	if (!user) {
		return res.status(401).json({ message: 'Not authorized' });
	}

	await recipeModel.findByIdAndDelete({ _id: id });

	await userModel.findByIdAndUpdate(user._id, { $pull: { userRecipes: id } }, { new: true });

	return res.status(204).send();
}

async function updateRecipe(req, res) {}

module.exports = {
	getCurrentUser,

	getUserRecipes,
	addRecipe,
	removeRecipe,
	updateRecipe,
};
