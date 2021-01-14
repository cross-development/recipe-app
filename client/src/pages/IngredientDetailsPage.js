//Core
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//Components
import IngredientDetails from 'components/Ingredients/IngredientDetails';
import { Loader, Notification, NotFound } from 'components/Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { ingredientOperations } from 'redux/ingredients';

const IngredientDetailsPage = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const { id } = useParams();

	const {
		auth: { user },
		ingredients: { ingredientDetails, loading, error },
	} = useSelector(state => state);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ingredientOperations.getIngredientById(id));
	}, [dispatch, id]);

	const handleAddToFavorite = () => {
		console.log('add to fav');
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
					onAddToFavorite={handleAddToFavorite}
				/>
			)}
		</div>
	);
};

export default IngredientDetailsPage;
