//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledContainer,
	StyledImgWrap,
	StyledImg,
	StyledDetailsWrap,
	StyledTitle,
	StyledCategory,
	StyledCuisine,
	StyledCooking,
	StyledNutrition,
	StyledNutritionItem,
	StyledIngredients,
	StyledIngredientsItem,
	StyledDescription,
	StyledButtonWrap,
	StyledButton,
} from './RecipeDetails.styles';

const RecipeDetails = ({ recipe = {}, existUser = {}, isFavorite, onAddToFavorite }) => {
	const { name, category, cuisine, cookingTime, description, ingredients } = recipe;
	const { protein, fat, carbs, kcal } = recipe;

	return (
		<StyledContainer>
			<StyledImgWrap>
				<StyledImg />
			</StyledImgWrap>

			<StyledDetailsWrap>
				<StyledTitle>{name}</StyledTitle>

				<StyledCategory>{category}</StyledCategory>
				<StyledCuisine>{cuisine}</StyledCuisine>
				<StyledCooking>{cookingTime}</StyledCooking>

				<StyledNutrition>
					<StyledNutritionItem>{protein}</StyledNutritionItem>
					<StyledNutritionItem>{fat}</StyledNutritionItem>
					<StyledNutritionItem>{carbs}</StyledNutritionItem>
					<StyledNutritionItem>{kcal}</StyledNutritionItem>
				</StyledNutrition>

				<StyledIngredients>
					{ingredients.map(({ _id, amount, unit }) => (
						<StyledIngredientsItem key={_id._id}>
							<p>{_id.name}</p>
							<p>{amount}</p>
							<p>{unit}</p>
						</StyledIngredientsItem>
					))}
				</StyledIngredients>

				<StyledDescription>{description}</StyledDescription>
			</StyledDetailsWrap>

			{existUser && (
				<StyledButtonWrap>
					<StyledButton type="button" onClick={onAddToFavorite}>
						{isFavorite ? 'Удалить из избранных' : 'Добавить в избранные'}
					</StyledButton>
				</StyledButtonWrap>
			)}
		</StyledContainer>
	);
};

RecipeDetails.propTypes = {
	recipe: PropTypes.object,
	userId: PropTypes.object,
	onAddToFavorite: PropTypes.func.isRequired,
};

export default RecipeDetails;
