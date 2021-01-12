//Core
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import RecipeDetails from 'components/Recipes/RecipeDetails';
import { Loader, Notification, NotFound } from 'components/Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes';

const RecipeDetailsPage = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const { id } = useParams();

	const {
		auth: { user },
		recipes: { item: recipe, loading, error },
	} = useSelector(state => state);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(recipeOperations.getRecipeById(id));
	}, [dispatch, id]);

	const handleAddToFavorite = () => {
		console.log('add to fav');
	};

	return (
		<div>
			{error && error.response.status !== 404 && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{error && error.response.status === 404 && <NotFound />}

			{recipe && (
				<RecipeDetails
					recipe={recipe}
					isFavorite={isFavorite}
					existUser={user}
					onAddToFavorite={handleAddToFavorite}
				/>
			)}
		</div>
	);
};

export default RecipeDetailsPage;
