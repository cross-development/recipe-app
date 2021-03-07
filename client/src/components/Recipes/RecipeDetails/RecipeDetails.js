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
	StyledAuthor,
	StyledNutrition,
	StyledNutritionItem,
	StyledIngredients,
	StyledIngredientsItem,
	StyledDescription,
	StyledButtonWrap,
	StyledButton,
} from './RecipeDetails.styles';

const RecipeDetails = ({ recipe = {}, existUser = {}, isFav, onChangeFav, onRemoveRecipe }) => {
	const { name, category, cuisine, cookingTime, description, ingredients, author } = recipe;
	const { protein, fat, carbs, kcal } = recipe;

	return (
		<StyledContainer>
			<StyledImgWrap>
				<StyledImg />
			</StyledImgWrap>

			<StyledDetailsWrap>
				<StyledTitle>Название: {name}</StyledTitle>

				<StyledCategory>Категория: {category.name}</StyledCategory>
				<StyledCuisine>Кухня: {cuisine.name}</StyledCuisine>
				<StyledCooking>Время приготовления: {cookingTime} мин.</StyledCooking>
				<StyledAuthor>Автор рецепта: {author.name}</StyledAuthor>

				<StyledNutrition>
					<StyledNutritionItem>Белки: {protein} г</StyledNutritionItem>
					<StyledNutritionItem>Жиры: {fat} г</StyledNutritionItem>
					<StyledNutritionItem>Углеводы: {carbs} г</StyledNutritionItem>
					<StyledNutritionItem>Калорийность: {kcal} ккал</StyledNutritionItem>
				</StyledNutrition>

				<StyledIngredients>
					Ингредиенты:
					{ingredients.map(({ info, amount, unit }) => (
						<StyledIngredientsItem key={info._id}>
							<p>{info.name}</p>
							<p>{amount}</p>
							<p>{unit}</p>
						</StyledIngredientsItem>
					))}
				</StyledIngredients>

				<StyledDescription>Приготовление: {description}</StyledDescription>
			</StyledDetailsWrap>

			{existUser && (
				<StyledButtonWrap>
					<StyledButton type="button" onClick={onChangeFav}>
						{isFav ? 'Удалить из избранных' : 'Добавить в избранные'}
					</StyledButton>

					{existUser.userId === author.id && (
						<StyledButton type="button" onClick={onRemoveRecipe}>
							Удалить рецепт
						</StyledButton>
					)}
				</StyledButtonWrap>
			)}
		</StyledContainer>
	);
};

RecipeDetails.propTypes = {
	recipe: PropTypes.object,
	existUser: PropTypes.object,
	isFav: PropTypes.bool.isRequired,
	onChangeFav: PropTypes.func.isRequired,
};

export default RecipeDetails;
