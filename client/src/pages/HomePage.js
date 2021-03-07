//Core
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import { Loader, Notification } from 'components/Commons';
import MainFilter from 'components/MainFilter';
import RecipeTable from 'components/Recipes/RecipeTable';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { recipeOperations } from 'redux/recipes';

const initialState = {
	page: 1,
	filterId: '',
	filterCategory: 'category',
};

const HomePage = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const [filter, setFilter] = useState(initialState);

	const handleChangeFilterId = filterId => setFilter(prevState => ({ ...prevState, filterId }));

	const handleGoHome = () => setFilter(prevState => ({ ...prevState, filterId: '' }));

	const handleChangeFilterCategory = ({ target: { name, value } }) =>
		setFilter({ filterId: '', [name]: value });

	const {
		loading,
		allRecipes: { results },
	} = useSelector(state => state.recipes);

	useEffect(() => {
		const { filterId, page } = filter;

		!filterId && dispatch(recipeOperations.getAllRecipes(page));
	}, [dispatch, filter]);

	useEffect(() => {
		const { page, filterId, filterCategory } = filter;

		filterId && dispatch(recipeOperations.getRecipesByFilter(filterCategory, filterId, page));
	}, [dispatch, filter]);

	return (
		<div>
			{loading && <Loader onLoad={loading} />}

			<MainFilter
				filter={filter.filterCategory}
				onGoHome={handleGoHome}
				onChangeFilterId={handleChangeFilterId}
				onChangeFilterCategory={handleChangeFilterCategory}
			/>

			{!loading && results.length > 0 && <RecipeTable recipes={results} location={location} />}

			{!loading && results.length < 1 && (
				<Notification message="По этой категории рецептов не найдено." />
			)}
		</div>
	);
};

export default HomePage;
