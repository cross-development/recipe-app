//Model
const ingredientModel = require('./ingredient.model');
//Utils
const prettyResponse = require('@utils/prettyResponse');

async function getAllIngredients(req, res, next) {
	try {
		const { page, limit, query } = req.query;

		const queryStr = query ? { name: { $regex: query, $options: 'i' } } : {};
		const options = { page, limit, select: 'name' };

		const results = await ingredientModel.paginate(queryStr, options);
		const response = prettyResponse(results);

		!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

async function getIngredientById(req, res, next) {
	try {
		const { id } = req.params;

		const response = await ingredientModel.findOne({ _id: id }).select('-__v');

		!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getAllIngredients,
	getIngredientById,
};
