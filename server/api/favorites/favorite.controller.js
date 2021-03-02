//Models
const userModel = require('../users/user.model');
const recipeModel = require('../recipes/recipe.model');
const ingredientModel = require('../ingredients/ingredient.model');

// =============================================================================
// FAVORITES INGREDIENTS                                                      ||
// =============================================================================

async function getFavIngredients(req, res) {
	const { _id } = req.user;

	const user = await userModel
		.findById(_id)
		.populate({ path: 'favIngredients', select: 'name category' });

	if (!user) {
		return res.status(401).json({ message: 'Not authorized' });
	}

	return res.status(200).json({ results: user.favIngredients });
}

async function addFavIngredient(req, res) {
	const {
		params: { id: ingredientId },
		user: { _id },
	} = req;

	const ingredient = await ingredientModel.findById(ingredientId);

	if (!ingredient) {
		return res.status(404).json({ message: 'Ingredient does not exists' });
	}

	await userModel.findByIdAndUpdate(
		_id,
		{
			$push: { favIngredients: ingredientId },
		},
		{
			new: true,
		},
	);

	return res.status(200).json(ingredient);
}

async function removeFavIngredient(req, res) {
	const {
		params: { id: ingredientId },
		user: { _id },
	} = req;

	const ingredient = await ingredientModel.findById(ingredientId);

	if (!ingredient) {
		return res.status(404).json({ message: 'Ingredient does not exists' });
	}

	await userModel.findByIdAndUpdate(
		_id,
		{
			$pull: { favIngredients: ingredientId },
		},
		{
			new: true,
		},
	);

	return res.status(204).send();
}

// =============================================================================
// FAVORITES RECIPES                                                          ||
// =============================================================================

async function getFavRecipes(req, res) {
	const { _id } = req.user;

	const user = await userModel.findById(_id).populate({
		path: 'favRecipes',
		select: '-ingredients -description -__v',
		populate: [
			{ path: 'category', select: '-_id' },
			{ path: 'cuisine', select: '-_id' },
		],
	});

	if (!user) {
		return res.status(401).json({ message: 'Not authorized' });
	}

	return res.status(200).json({ results: user.favRecipes });
}

async function addFavRecipe(req, res) {
	const {
		params: { id: recipeId },
		user: { _id },
	} = req;

	const recipe = await recipeModel.findById(recipeId);

	if (!recipe) {
		return res.status(404).json({ message: 'Recipe does not exists' });
	}

	await userModel.findByIdAndUpdate(
		_id,
		{
			$push: { favRecipes: recipeId },
		},
		{
			new: true,
		},
	);

	return res.status(200).json(recipe);
}

async function removeFavRecipe(req, res) {
	const {
		params: { id: recipeId },
		user: { _id },
	} = req;

	const recipe = await recipeModel.findById(recipeId);

	if (!recipe) {
		return res.status(404).json({ message: 'Recipe does not exists' });
	}

	await userModel.findByIdAndUpdate(
		_id,
		{
			$pull: { favRecipes: recipeId },
		},
		{
			new: true,
		},
	);

	return res.status(204).send();
}

module.exports = {
	getFavIngredients,
	addFavIngredient,
	removeFavIngredient,

	getFavRecipes,
	addFavRecipe,
	removeFavRecipe,
};
