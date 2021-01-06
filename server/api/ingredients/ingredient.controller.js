//Model
const ingredientModel = require('./ingredient.model');

async function getAllIngredients(req, res, next) {
	try {
		const { page } = req.query;

		const options = { page, limit: 10 };
		const option = { select: 'name' };

		const results = await ingredientModel.paginate({}, page ? { ...options, ...option } : option);

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

async function getIngredientById(req, res, next) {
	try {
		const { id } = req.params;
		const ingredient = await ingredientModel.findOne({ _id: id }).select('-__v');

		!ingredient ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(ingredient);
	} catch (error) {
		next(error);
	}
}

async function getIngredientByQuery(req, res, next) {
	try {
		const { query } = req.query;
		const ingredient = await ingredientModel
			.find({ name: { $regex: query, $options: 'i' } })
			.select('-__v');

		!ingredient ? res.status(404).json({ message: 'Not found' }) : res.status(200).json(ingredient);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	getAllIngredients,
	getIngredientById,
	getIngredientByQuery,
};
