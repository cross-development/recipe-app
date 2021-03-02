//Model
const recipeCategoryModel = require('./recipeCategory.model');

async function getRecipesCategories(req, res) {
	const results = await recipeCategoryModel.find({});

	return res.status(200).json(results);
}

module.exports = { getRecipesCategories };
