//Model
const recipeModel = require('./recipe.model');

async function getAllRecipes(req, res, next) {
	try {
		const { page } = req.query;

		const options = { page, limit: 10 };
		const option = { populate: { path: 'ingredients', select: 'name' } };

		const results = await recipeModel.paginate({}, page ? { ...options, ...option } : option);

		const response = {
			results: results.docs,
			limitResults: results.limit,
			totalResults: results.totalDocs,
			page: results.page,
			totalPages: results.totalPages,
		};

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function getRecipeById(req, res, next) {
	try {
		const { id } = req.params;
		const recipe = await recipeModel.findOne({ _id: id }).populate('ingredients');

		!recipe ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(recipe);
	} catch (error) {
		next(error);
	}
}

async function getRecipeByQuery(req, res, next) {
	try {
		const { query } = req.query;
		const recipe = await recipeModel
			.find({ name: { $regex: query, $options: 'i' } })
			.populate('ingredients');

		!recipe ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(recipe);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getAllRecipes,
	getRecipeById,
	getRecipeByQuery,
};
