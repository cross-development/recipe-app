//Core
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
//Components
import IngredientDetails from 'components/Ingredients/IngredientDetails';
import { Loader, Notification, NotFound } from 'components/Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { ingredientOperations } from 'redux/ingredients';
import { favoriteOperations } from 'redux/favorites';

const IngredientDetailsPage = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const { id } = useParams();

	const {
		auth: { user },
		favorites: { favIngredients },
		ingredients: { ingredientDetails, loading, error },
	} = useSelector(state => state);

	const dispatch = useDispatch();

	useEffect(() => {
		user && dispatch(favoriteOperations.getFavIngredients());

		dispatch(ingredientOperations.getIngredientById(id));
	}, [dispatch, user, id]);

	useMemo(
		() => user && favIngredients.find(({ _id }) => (_id === id ? setIsFavorite(true) : false)),
		[favIngredients, user, id],
	);

	const handleChangeFavorites = () => {
		if (!isFavorite) {
			dispatch(favoriteOperations.addFavIngredient(id));
			setIsFavorite(true);
			return;
		}

		dispatch(favoriteOperations.removeFavIngredient(id));
		setIsFavorite(false);
	};

	return (
		<div>
			{error && error.response.status !== 404 && <Notification message={error.message} />}

			{loading && <Loader onLoad={loading} />}

			{error && error.response.status === 404 && <NotFound />}

			{ingredientDetails && (
				<IngredientDetails
					existUser={user}
					isFavorite={isFavorite}
					ingredient={ingredientDetails}
					onChangeFavorites={handleChangeFavorites}
				/>
			)}
		</div>
	);
};

export default IngredientDetailsPage;
