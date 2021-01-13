//Core
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import RecipeForm from 'components/Recipes/RecipeForm';
import RecipeTable from 'components/Recipes/RecipeTable';
import RecipeButton from 'components/Recipes/RecipeButton';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes';

const MyRecipesPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleToggleModalOpen = () => setIsModalOpen(prevState => !prevState);

	const location = useLocation();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(recipeOperations.getUserRecipes());
	}, [dispatch]);

	const { userRecipes } = useSelector(state => state.recipes);

	return (
		<div>
			<RecipeTable recipes={userRecipes} location={location} />

			<RecipeButton isModalOpen={isModalOpen} onToggleModalOpen={handleToggleModalOpen} />

			{isModalOpen && <RecipeForm onToggleModalOpen={handleToggleModalOpen} />}
		</div>
	);
};

export default MyRecipesPage;
