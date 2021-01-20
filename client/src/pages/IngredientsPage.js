//Core
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader } from 'components/Commons';
import IngredientTable from 'components/Ingredients/IngredientTable';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { ingredientOperations } from 'redux/ingredients';

const IngredientsPage = () => {
	const location = useLocation();

	const dispatch = useDispatch();
	const { allIngredients, loading } = useSelector(state => state.ingredients);

	useEffect(() => {
		dispatch(ingredientOperations.getAllIngredients());
	}, [dispatch]);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			{!loading && allIngredients.length > 0 && (
				<IngredientTable ingredients={allIngredients} location={location} />
			)}
		</div>
	);
};

export default IngredientsPage;
