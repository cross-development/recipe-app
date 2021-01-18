//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import IngredientTable from 'components/Ingredients/IngredientTable';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { favoriteOperations } from 'redux/favorites';

const FavIngredientsPage = () => {
	const dispatch = useDispatch();

	const location = useLocation();
	const { favIngredients } = useSelector(state => state.favorites);

	useEffect(() => {
		dispatch(favoriteOperations.getFavIngredients());
	}, [dispatch]);

	return (
		<div>
			<IngredientTable ingredients={favIngredients} location={location} />
		</div>
	);
};

export default FavIngredientsPage;
