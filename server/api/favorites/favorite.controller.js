//Models
const userModel = require('@api/users/user.model');
const recipeModel = require('@api/recipes/recipe.model');
const ingredientModel = require('@api/ingredients/ingredient.model');

// =============================================================================
// FAVORITES INGREDIENTS                                                      ||
// =============================================================================

async function getFavIngredients(req, res, next) {
	try {
		const { userId } = req.user;

		const user = await userModel
			.findById(userId)
			.populate({ path: 'favIngredients', select: 'name' });

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		return res.status(200).json({ results: user.favIngredients });
	} catch (error) {
		next(error);
	}
}

async function addFavIngredient(req, res, next) {
	try {
		const {
			params: { id: ingredientId },
			user: { userId },
		} = req;

		const ingredient = await ingredientModel.findById(ingredientId);

		if (!ingredient) {
			return res.status(404).json({ message: 'Ingredient does not exists' });
		}

		await userModel.findByIdAndUpdate(
			userId,
			{
				$push: { favIngredients: ingredientId },
			},
			{
				new: true,
			},
		);

		return res.status(200).json(ingredient);
	} catch (error) {
		next(error);
	}
}

async function removeFavIngredient(req, res, next) {
	try {
		const {
			params: { id: ingredientId },
			user: { userId },
		} = req;

		const ingredient = await ingredientModel.findById(ingredientId);

		if (!ingredient) {
			return res.status(404).json({ message: 'Ingredient does not exists' });
		}

		await userModel.findByIdAndUpdate(
			userId,
			{
				$pull: { favIngredients: ingredientId },
			},
			{
				new: true,
			},
		);

		return res.status(204).send();
	} catch (error) {
		next(error);
	}
}

// =============================================================================
// FAVORITES RECIPES                                                          ||
// =============================================================================

async function getFavRecipes(req, res, next) {
	try {
		const { userId } = req.user;

		const user = await userModel
			.findById(userId)
			.populate({ path: 'favRecipes', select: '-ingredients -description -__v' });

		if (!user) {
			return res.status(401).json({ message: 'Not authorized' });
		}

		return res.status(200).json({ results: user.favRecipes });
	} catch (error) {
		next(error);
	}
}

async function addFavRecipe(req, res, next) {
	try {
		const {
			params: { id: recipeId },
			user: { userId },
		} = req;

		const recipe = await recipeModel.findById(recipeId);

		if (!recipe) {
			return res.status(404).json({ message: 'Recipe does not exists' });
		}

		await userModel.findByIdAndUpdate(
			userId,
			{
				$push: { favRecipes: recipeId },
			},
			{
				new: true,
			},
		);

		return res.status(200).json(recipe);
	} catch (error) {
		next(error);
	}
}

async function removeFavRecipe(req, res, next) {
	try {
		const {
			params: { id: recipeId },
			user: { userId },
		} = req;

		const recipe = await recipeModel.findById(recipeId);

		if (!recipe) {
			return res.status(404).json({ message: 'Recipe does not exists' });
		}

		await userModel.findByIdAndUpdate(
			userId,
			{
				$pull: { favRecipes: recipeId },
			},
			{
				new: true,
			},
		);

		return res.status(204).send();
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getFavIngredients,
	addFavIngredient,
	removeFavIngredient,

	getFavRecipes,
	addFavRecipe,
	removeFavRecipe,
};
