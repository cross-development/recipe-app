//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import IngredientTable from 'components/Ingredients/IngredientTable';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { ingredientOperations } from 'redux/ingredients';

const IngredientsPage = () => {
	const location = useLocation();

	const dispatch = useDispatch();
	const { allIngredients } = useSelector(state => state.ingredients);

	useEffect(() => {
		dispatch(ingredientOperations.getAllIngredients());
	}, [dispatch]);

	return (
		<div>
			<IngredientTable ingredients={allIngredients} location={location} />
		</div>
	);
};

export default IngredientsPage;
