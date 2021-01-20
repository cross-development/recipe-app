//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader } from 'components/Commons';
import { Notification } from 'components/Commons';
import RecipeTable from 'components/Recipes/RecipeTable';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { favoriteOperations } from 'redux/favorites';

const FavRecipesPage = () => {
	const dispatch = useDispatch();

	const location = useLocation();
	const { favRecipes, loading } = useSelector(state => state.favorites);

	useEffect(() => {
		dispatch(favoriteOperations.getFavRecipes());
	}, [dispatch]);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			{!loading && favRecipes.length < 1 && (
				<Notification message="У вас пока нет избранных рецептов." />
			)}

			{!loading && favRecipes.length > 0 && (
				<RecipeTable recipes={favRecipes} location={location} />
			)}
		</div>
	);
};

export default FavRecipesPage;
