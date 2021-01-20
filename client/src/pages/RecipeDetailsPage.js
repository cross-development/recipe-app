//Core
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
//Components
import RecipeDetails from 'components/Recipes/RecipeDetails';
import { Loader, Notification, NotFound } from 'components/Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes';
import { favoriteOperations } from 'redux/favorites';

const RecipeDetailsPage = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const { id: recipeId } = useParams();

	const {
		auth: { user },
		favorites: { favRecipes },
		recipes: { recipeDetails, loading, error },
	} = useSelector(state => state);

	const dispatch = useDispatch();

	useEffect(() => {
		user && dispatch(favoriteOperations.getFavRecipes());

		dispatch(recipeOperations.getRecipeById(recipeId));
	}, [dispatch, user, recipeId]);

	useMemo(
		() => user && favRecipes.find(({ _id }) => (_id === recipeId ? setIsFavorite(true) : false)),
		[favRecipes, user, recipeId],
	);

	const handleChangeFavorites = () => {
		if (!isFavorite) {
			dispatch(favoriteOperations.addFavRecipe(recipeId));
			setIsFavorite(true);
			return;
		}

		dispatch(favoriteOperations.removeFavRecipe(recipeId));
		setIsFavorite(false);
	};

	const handleRemoveRecipe = () => dispatch(recipeOperations.removeUserRecipe(recipeId));

	return (
		<div>
			{error && error.response.status !== 404 && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{error && error.response.status === 404 && <NotFound />}

			{recipeDetails && (
				<RecipeDetails
					existUser={user}
					recipe={recipeDetails}
					isFav={isFavorite}
					onRemoveRecipe={handleRemoveRecipe}
					onChangeFav={handleChangeFavorites}
				/>
			)}
		</div>
	);
};

export default RecipeDetailsPage;
