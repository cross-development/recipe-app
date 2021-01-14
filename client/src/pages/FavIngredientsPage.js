//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import IngredientTable from 'components/Ingredients/IngredientTable';
//Redux
import { useSelector } from 'react-redux';

const FavIngredientsPage = () => {
	const location = useLocation();
	const { allIngredients } = useSelector(state => state.ingredients);

	return (
		<div>
			<IngredientTable ingredients={allIngredients} location={location} />
		</div>
	);
};

export default FavIngredientsPage;
