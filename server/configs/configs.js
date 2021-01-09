const configs = {
	users: {
		minNameLength: 3,
		maxNameLength: 20,
		minPassLength: 6,
		maxPassLength: 20,
	},

	recipes: {
		ingredientUnits: ['кг', 'г', 'л', 'мл', 'шт', 'стакан', 'ст.л.', 'ч.л.', 'щепотка', 'по вкусу'],

		minNameLength: 2,
		minCategoryLength: 2,
		minCuisineLength: 2,
		minCookingLength: 2,
		minDescLength: 2,
		minNutrientsValue: 0,
	},

	queryParams: {
		minPageNumber: 1,
		minLimitNumber: 10,
		minQueryLength: 2,
	},
};

module.exports = configs;
