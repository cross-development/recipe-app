//Model
const recipeModel = require('./recipe.model');
//Utils
const prettyResponse = require('../../utils/prettyResponse');

async function getAllRecipes(req, res, next) {
	try {
		const { page } = req.query;

		const options = { page, limit: 10 };
		const option = { select: '-ingredients -description -__v' };

		const results = await recipeModel.paginate({}, page ? { ...options, ...option } : option);
		const response = prettyResponse(results);

		return res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function getRecipeById(req, res, next) {
	try {
		const { id } = req.params;

		const recipe = await recipeModel.findOne({ _id: id }).populate({
			path: 'ingredients',
			populate: { path: '_id', select: '-__v' },
		});

		!recipe ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(recipe);
	} catch (error) {
		next(error);
	}
}

async function getRecipeByQuery(req, res, next) {
	try {
		const query = { name: { $regex: req.query.query, $options: 'i' } };
		const options = { select: '-ingredients -description -__v' };

		const results = await recipeModel.paginate(query, options);
		const response = prettyResponse(results);

		!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getAllRecipes,
	getRecipeById,
	getRecipeByQuery,
};
