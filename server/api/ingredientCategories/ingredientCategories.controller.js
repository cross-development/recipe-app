//Model
const ingredientCategoriesModel = require('./ingredientCategories.model');

async function getIngredientCategories(req, res) {
	const results = await ingredientCategoriesModel.find({});

	return res.status(200).json(results);
}

module.exports = { getIngredientCategories };
