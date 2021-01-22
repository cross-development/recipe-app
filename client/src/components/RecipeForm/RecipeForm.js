//Core
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
//Components
import NameInput from './NameInput';
import CuisineInput from './CuisineInput';
import CategoryInput from './CategoryInput';
import CookingInput from './CookingInput';
import IngredientInput from './IngredientInput';
import IngredientsList from './IngredientsList';
import NutritionInput from './NutritionInput';
import DescInput from './DescInput';
import ButtonsGroup from './ButtonsGroup';
//Redux
import { useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes';
//Styles
import { StyledContainer, StyledForm, StyledCloseBtn, StyledTitle } from './RecipeForm.styles';

const initialRecipeState = {
	name: '',
	category: '',
	cuisine: '',
	cookingTime: '',
	ingredients: [],
	description: '',
	protein: 0,
	fat: 0,
	carbs: 0,
	kcal: 0,
};

const RecipeForm = ({ onToggleModalOpen }) => {
	const [recipe, setRecipe] = useState(initialRecipeState);
	const [ingredients, setIngredient] = useState([]);

	const dispatch = useDispatch();

	const handleCloseModal = useCallback(
		({ code, target }) => {
			if (code === 'Escape' || target.id === 'backdrop') {
				onToggleModalOpen();
			}
		},
		[onToggleModalOpen],
	);

	useEffect(() => {
		window.addEventListener('click', handleCloseModal);
		window.addEventListener('keydown', handleCloseModal);

		return () => {
			window.removeEventListener('click', handleCloseModal);
			window.removeEventListener('keydown', handleCloseModal);
		};
	}, [handleCloseModal]);

	const handleChangeRecipe = ({ target: { name, value } }) =>
		setRecipe(prevState => ({ ...prevState, [name]: value }));

	const handleAddIngredient = ingredient => setIngredient(prevState => [...prevState, ingredient]);

	const prettyIngredients = ingredients =>
		ingredients.map(({ value, amount, unit }) => ({ info: value, amount: parseInt(amount), unit }));

	const handleRemoveIngredient = ({ target: { id } }) =>
		setIngredient(prevState => prevState.filter(({ value }) => value !== id));

	const handleSubmit = e => {
		e.preventDefault();

		const updatedIngredients = prettyIngredients(ingredients);

		const credential = { ...recipe, ingredients: [...updatedIngredients] };

		console.log('credential', credential);

		// dispatch(recipeOperations.addUserRecipe({ credential }));
		onToggleModalOpen();
	};

	return (
		<StyledContainer id="backdrop">
			<StyledForm onSubmit={handleSubmit}>
				<StyledCloseBtn type="button" onClick={onToggleModalOpen}>
					&#10006;
				</StyledCloseBtn>

				<StyledTitle>Добавить рецепт</StyledTitle>

				<NameInput name={recipe.name} onChangeRecipe={handleChangeRecipe} />

				<CategoryInput category={recipe.category} onChangeRecipe={handleChangeRecipe} />

				<CuisineInput cuisine={recipe.cuisine} onChangeRecipe={handleChangeRecipe} />

				<CookingInput cookingTime={recipe.cookingTime} onChangeRecipe={handleChangeRecipe} />

				<IngredientInput onAddIngredient={handleAddIngredient} />

				{ingredients.length > 0 && (
					<IngredientsList ingredients={ingredients} onRemoveIngredient={handleRemoveIngredient} />
				)}

				<NutritionInput
					protein={recipe.protein}
					fat={recipe.fat}
					carbs={recipe.carbs}
					kcal={recipe.kcal}
					onChangeRecipe={handleChangeRecipe}
				/>

				<DescInput description={recipe.description} onChangeRecipe={handleChangeRecipe} />

				<ButtonsGroup onToggleModalOpen={onToggleModalOpen} />
			</StyledForm>
		</StyledContainer>
	);
};

RecipeForm.propTypes = {
	onToggleModalOpen: PropTypes.func.isRequired,
};

export default RecipeForm;
