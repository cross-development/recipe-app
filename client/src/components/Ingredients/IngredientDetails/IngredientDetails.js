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
	StyledNutrition,
	StyledNutritionItem,
	StyledButtonWrap,
	StyledButton,
} from './IngredientDetails.styles';

const IngredientDetails = ({ ingredient = {}, existUser = {}, onChangeFavorites, isFavorite }) => {
	const { name, category, protein, fat, carbs, kcal } = ingredient;

	return (
		<StyledContainer>
			<StyledImgWrap>
				<StyledImg />
			</StyledImgWrap>

			<StyledDetailsWrap>
				<StyledTitle>{name}</StyledTitle>

				<StyledCategory>{category}</StyledCategory>

				<StyledNutrition>
					<StyledNutritionItem>{protein}</StyledNutritionItem>
					<StyledNutritionItem>{fat}</StyledNutritionItem>
					<StyledNutritionItem>{carbs}</StyledNutritionItem>
					<StyledNutritionItem>{kcal}</StyledNutritionItem>
				</StyledNutrition>
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

IngredientDetails.propTypes = {
	existUser: PropTypes.object,
	ingredient: PropTypes.object,
	isFavorite: PropTypes.bool.isRequired,
	onChangeFavorites: PropTypes.func.isRequired,
};

export default IngredientDetails;
