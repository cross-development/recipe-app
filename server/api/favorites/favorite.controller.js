//Models
const userModel = require('../users/user.model');
const recipeModel = require('../recipes/recipe.model');
const ingredientModel = require('../ingredients/ingredient.model');

// =============================================================================
// FAVORITES INGREDIENTS                                                      ||
// =============================================================================

async function getFavIngredients(req, res) {
	const user = await userModel
		.findById(req.user._id)
		.populate({ path: 'favIngredients', select: 'name category' });

	return res.status(200).json({ results: user.favIngredients });
}

async function addFavIngredient(req, res) {
	const { id: ingredientId } = req.params;

	const ingredient = await ingredientModel.findById(ingredientId);

	if (!ingredient) {
		return res.status(404).json({ message: 'Ingredient does not exists' });
	}

	await userModel.findByIdAndUpdate(
		req.user._id,
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
	const { id: ingredientId } = req.params;

	const ingredient = await ingredientModel.findById(ingredientId);

	if (!ingredient) {
		return res.status(404).json({ message: 'Ingredient does not exists' });
	}

	await userModel.findByIdAndUpdate(
		req.user._id,
		{
			$pull: { favIngredients: ingredientId },
		},
		{
			new: true,
		},
	);

	return res.status(200).json({ ingredientId });
}

// =============================================================================
// FAVORITES RECIPES                                                          ||
// =============================================================================

async function getFavRecipes(req, res) {
	const user = await userModel.findById(req.user._id).populate({
		path: 'favRecipes',
		select: '-ingredients -description -__v',
		populate: [
			{ path: 'category', select: '-_id' },
			{ path: 'cuisine', select: '-_id' },
		],
	});

	return res.status(200).json({ results: user.favRecipes });
}

async function addFavRecipe(req, res) {
	const { id: recipeId } = req.params;

	const recipe = await recipeModel.findById(recipeId).select('-__v');

	if (!recipe) {
		return res.status(404).json({ message: 'Recipe does not exists' });
	}

	await userModel.findByIdAndUpdate(
		req.user._id,
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
	const { id: recipeId } = req.params;

	const recipe = await recipeModel.findById(recipeId);

	if (!recipe) {
		return res.status(404).json({ message: 'Recipe does not exists' });
	}

	await userModel.findByIdAndUpdate(
		req.user._id,
		{
			$pull: { favRecipes: recipeId },
		},
		{
			new: true,
		},
	);

	return res.status(200).json({ recipeId });
}

module.exports = {
	getFavIngredients,
	addFavIngredient,
	removeFavIngredient,

	getFavRecipes,
	addFavRecipe,
	removeFavRecipe,
};
