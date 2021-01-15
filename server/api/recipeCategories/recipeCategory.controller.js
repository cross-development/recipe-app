//Model
const recipeCategoryModel = require('./recipeCategory.model');

async function getRecipesCategories(req, res, next) {
	try {
		const results = await recipeCategoryModel.find();

		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
}

module.exports = { getRecipesCategories };
