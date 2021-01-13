//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import RecipeTable from 'components/Recipes/RecipeTable';
//Redux
import { useSelector } from 'react-redux';

const FavRecipesPage = () => {
	const location = useLocation();
	const { allRecipes } = useSelector(state => state.recipes);

	return (
		<div>
			<RecipeTable recipes={allRecipes} location={location} />
		</div>
	);
};

export default FavRecipesPage;
