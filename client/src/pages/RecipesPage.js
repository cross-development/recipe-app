//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import RecipeTable from 'components/Recipes/RecipeTable';
//Redux
import { useSelector } from 'react-redux';

const RecipesPage = () => {
	const location = useLocation();
	const { items } = useSelector(state => state.recipes);

	return (
		<div>
			<RecipeTable recipes={items} location={location} />
		</div>
	);
};

export default RecipesPage;
