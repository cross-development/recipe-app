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

const RecipeDetails = ({ recipe = {}, existUser = {}, isFavorite, onChangeFavorites }) => {
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
					{ingredients.map(({ info, amount, unit }) => (
						<StyledIngredientsItem key={info._id}>
							<p>{info.name}</p>
							<p>{amount}</p>
							<p>{unit}</p>
						</StyledIngredientsItem>
					))}
				</StyledIngredients>

				<StyledDescription>{description}</StyledDescription>
			</StyledDetailsWrap>

			{existUser && (
				<StyledButtonWrap>
					<StyledButton type="button" onClick={onChangeFavorites}>
						{isFavorite ? 'Удалить из избранных' : 'Добавить в избранные'}
					</StyledButton>
				</StyledButtonWrap>
			)}
		</StyledContainer>
	);
};

RecipeDetails.propTypes = {
	recipe: PropTypes.object,
	existUser: PropTypes.object,
	isFavorite: PropTypes.bool.isRequired,
	onChangeFavorites: PropTypes.func.isRequired,
};

export default RecipeDetails;
