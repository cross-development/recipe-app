//Model
const ingredientCategoriesModel = require('./ingredientCategories.model');

async function getIngredientCategories(req, res, next) {
	try {
		const results = await ingredientCategoriesModel.find();

		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
}

module.exports = { getIngredientCategories };
