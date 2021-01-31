//Core
import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader, Pagination } from 'components/Commons';
import IngredientTable from 'components/Ingredients/IngredientTable';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { ingredientOperations } from 'redux/ingredients';

const IngredientsPage = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const {
		loading,
		allIngredients: { results, totalPages },
	} = useSelector(state => state.ingredients);

	const fetchAllIngredients = useCallback(
		page => page > 0 && dispatch(ingredientOperations.getAllIngredients(page)),
		[dispatch],
	);

	useEffect(() => fetchAllIngredients(), [fetchAllIngredients]);

	const handleChangePaginate = ({ selected }) => fetchAllIngredients(selected + 1);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			{!loading && results.length > 0 && (
				<IngredientTable ingredients={results} location={location} />
			)}

			<Pagination totalPages={totalPages} onChangePaginate={handleChangePaginate} />
		</div>
	);
};

export default IngredientsPage;
