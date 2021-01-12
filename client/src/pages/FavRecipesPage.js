//Core
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
//Components
import RecipeForm from 'components/Recipes/RecipeForm';
import RecipeTable from 'components/Recipes/RecipeTable';
import RecipeButton from 'components/Recipes/RecipeButton';
//Redux
import { useSelector } from 'react-redux';

const FavRecipesPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const handleToggleModalOpen = () => setIsModalOpen(prevState => !prevState);

	const location = useLocation();
	const { items } = useSelector(state => state.recipes);

	return (
		<div>
			<RecipeTable recipes={items} location={location} />

			<RecipeButton isModalOpen={isModalOpen} onToggleModalOpen={handleToggleModalOpen} />

			{isModalOpen && <RecipeForm onToggleModalOpen={handleToggleModalOpen} />}
		</div>
	);
};

export default FavRecipesPage;
