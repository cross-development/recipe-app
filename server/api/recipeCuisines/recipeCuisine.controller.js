//Model
const recipeCuisineModel = require('./recipeCuisine.model');

async function getRecipesCuisines(req, res, next) {
	try {
		const results = await recipeCuisineModel.find({});

		return res.status(200).json(results);
	} catch (error) {
		next(error);
	}
}

module.exports = { getRecipesCuisines };
