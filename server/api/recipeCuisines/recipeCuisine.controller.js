//Model
const recipeCuisineModel = require('./recipeCuisine.model');

async function getRecipesCuisines(req, res) {
	const results = await recipeCuisineModel.find({});

	return res.status(200).json(results);
}

module.exports = { getRecipesCuisines };
