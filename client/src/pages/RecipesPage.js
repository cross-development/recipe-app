//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader } from 'components/Commons';
import RecipeTable from 'components/Recipes/RecipeTable';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes';

const RecipesPage = () => {
	const location = useLocation();

	const dispatch = useDispatch();
	const { allRecipes, loading } = useSelector(state => state.recipes);

	useEffect(() => {
		dispatch(recipeOperations.getAllRecipes());
	}, [dispatch]);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			{!loading && allRecipes.length > 0 && (
				<RecipeTable recipes={allRecipes} location={location} />
			)}
		</div>
	);
};

export default RecipesPage;
