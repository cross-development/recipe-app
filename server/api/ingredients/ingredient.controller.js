//Model
const ingredientModel = require('./ingredient.model');
const ingredientInfoModel = require('./ingredientInfo.model');
//Utils
const prettyResponse = require('../../utils/prettyResponse');

async function getAllIngredients(req, res) {
	const { page, limit, query, category } = req.query;

	const queryStr = query ? { category, name: { $regex: query, $options: 'i' } } : {};
	const options = { page, limit, select: 'name category' };

	const results = await ingredientModel.paginate(queryStr, options);
	const response = prettyResponse(results);

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

async function getIngredientById(req, res) {
	const { id } = req.params;

	const response = await ingredientModel.findOne({ _id: id }).select('-__v');

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

async function getIngredientInfo(req, res) {
	const results = await ingredientInfoModel.find({});

	return res.status(200).json(results);
}

module.exports = {
	getAllIngredients,
	getIngredientById,
	getIngredientInfo,
};
