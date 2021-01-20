//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader } from 'components/Commons';
import { Notification } from 'components/Commons';
import IngredientTable from 'components/Ingredients/IngredientTable';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { favoriteOperations } from 'redux/favorites';

const FavIngredientsPage = () => {
	const dispatch = useDispatch();

	const location = useLocation();
	const { favIngredients, loading } = useSelector(state => state.favorites);

	useEffect(() => {
		dispatch(favoriteOperations.getFavIngredients());
	}, [dispatch]);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			{!loading && favIngredients.length < 1 && (
				<Notification message="У вас пока нет избранных продуктов." />
			)}

			{!loading && favIngredients.length > 0 && (
				<IngredientTable ingredients={favIngredients} location={location} />
			)}
		</div>
	);
};

export default FavIngredientsPage;
