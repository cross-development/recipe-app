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

	const handleChangeFilterCategory = ({ target: { name, value } }) =>
		setFilter({ filterId: '', [name]: value });

	const { allRecipes, loading } = useSelector(state => state.recipes);

	useEffect(() => {
		const { page, filterId, filterCategory } = filter;

		filterId && dispatch(recipeOperations.getRecipesByFilter(filterCategory, filterId, page));
	}, [dispatch, filter]);

	return (
		<div>
			<MainFilter
				filter={filter.filterCategory}
				onChangeFilterId={handleChangeFilterId}
				onChangeFilterCategory={handleChangeFilterCategory}
			/>

			{loading && <Loader onLoad={loading} />}

			{!loading && allRecipes.length < 1 && (
				<Notification message="По этой категории рецептов не найдено." />
			)}

			{!loading && allRecipes.length > 0 && (
				<RecipeTable recipes={allRecipes} location={location} />
			)}
		</div>
	);
};

export default HomePage;
