//Model
const recipeModel = require('./recipe.model');
//Utils
const prettyResponse = require('../../utils/prettyResponse');

async function getAllRecipes(req, res) {
	const { page, limit, query } = req.query;

	const queryStr = query ? { name: { $regex: query, $options: 'i' } } : {};
	const options = {
		page: page || 1,
		limit: limit || 10,
		select: '-ingredients -description -__v',
		populate: [
			{ path: 'category', select: '-_id' },
			{ path: 'cuisine', select: '-_id' },
		],
	};

	const results = await recipeModel.paginate(queryStr, options);
	const response = prettyResponse(results);

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

async function getRecipeById(req, res) {
	const { id } = req.params;
	const ingredientOptions = { path: 'ingredients', populate: { path: 'info', select: 'name' } };
	const categoryOptions = { path: 'category', select: '-_id' };
	const cuisineOptions = { path: 'cuisine', select: '-_id' };

	const response = await recipeModel
		.findOne({ _id: id })
		.populate(ingredientOptions)
		.populate(categoryOptions)
		.populate(cuisineOptions)
		.select('-__v');

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

async function getRecipesByFilter(req, res) {
	const {
		params: { id, filter },
		query: { page, limit },
	} = req;

	const options = {
		page: page || 1,
		limit: limit || 10,
		select: '-ingredients -description -__v',
		populate: [
			{ path: 'category', select: '-_id' },
			{ path: 'cuisine', select: '-_id' },
		],
	};

	const results = await recipeModel.paginate({ [filter]: id }, options);
	const response = prettyResponse(results);

	!response ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(response);
}

module.exports = { getAllRecipes, getRecipeById, getRecipesByFilter };
