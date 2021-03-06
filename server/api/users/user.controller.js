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

	return res.status(200).json({ userId: user._id, username: user.username, email: user.email });
}

// =============================================================================
// USER CUSTOM RECIPES                                                        ||
// =============================================================================

async function getUserRecipes(req, res) {
	const { page, limit } = req.query;

	const options = {
		page,
		limit,
		select: '-ingredients -description -__v',
		populate: [
			{ path: 'category', select: '-_id' },
			{ path: 'cuisine', select: '-_id' },
		],
	};

	const results = await recipeModel.paginate({ authorID: req.user._id }, options);
	const response = prettyResponse(results);

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

async function addRecipe(req, res) {
	const user = await userModel.findById(req.user._id);

	const recipe = await recipeModel.create({
		...req.body,
		author: { id: user._id, name: user.username },
	});

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

	await recipeModel.findByIdAndDelete({ _id: id });
	await userModel.findByIdAndUpdate(user._id, { $pull: { userRecipes: id } }, { new: true });

	return res.status(200).json({ recipeId: id });
}

async function updateRecipe(req, res) {}

module.exports = {
	getCurrentUser,

	getUserRecipes,
	addRecipe,
	removeRecipe,
	updateRecipe,
};
