//Model
const recipeModel = require('./recipe.model');
//Utils
const prettyResponse = require('../../utils/prettyResponse');

async function getAllRecipes(req, res, next) {
	try {
		const { page, limit, query } = req.query;

		const queryStr = query ? { name: { $regex: query, $options: 'i' } } : {};
		const options = { page, limit, select: '-ingredients -description -__v' };

		const results = await recipeModel.paginate(queryStr, options);
		const response = prettyResponse(results);

		!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function getRecipeById(req, res, next) {
	try {
		const { id } = req.params;
		const options = { path: 'ingredients', populate: { path: '_id', select: '-__v' } };

		const response = await recipeModel.findOne({ _id: id }).populate(options);

		!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getAllRecipes,
	getRecipeById,
};
