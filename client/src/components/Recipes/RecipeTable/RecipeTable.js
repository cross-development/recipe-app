//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledList,
	StyledListItem,
	StyledItemLink,
	StyledImg,
	StyledTitle,
	StyledCategory,
	StyledCuisine,
	StyledCooking,
	StyledNutrition,
	StyledNutritionItem,
} from './RecipeTable.styles';

const RecipeTable = ({ recipes = [], location = {} }) => (
	<StyledList>
		{recipes.map(({ _id, name, category, cuisine, cookingTime, ...nutrition }) => (
			<StyledListItem key={_id}>
				<StyledItemLink
					to={{
						pathname: `/recipes/${_id}`,
						state: { from: location },
					}}
				>
					<StyledImg src="https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg" />
					<StyledTitle>Название: {name}</StyledTitle>
					<StyledCategory>Категория: {category.name}</StyledCategory>
					<StyledCuisine>Кухня: {cuisine.name}</StyledCuisine>
					<StyledCooking>Время приготовления: {cookingTime} мин.</StyledCooking>
					<StyledNutrition>
						<StyledNutritionItem>Белки: {nutrition.protein} г</StyledNutritionItem>
						<StyledNutritionItem>Жиры: {nutrition.fat} г</StyledNutritionItem>
						<StyledNutritionItem>Углеводы: {nutrition.carbs} г</StyledNutritionItem>
						<StyledNutritionItem>Калорийность: {nutrition.kcal} ккал</StyledNutritionItem>
					</StyledNutrition>
				</StyledItemLink>
			</StyledListItem>
		))}
	</StyledList>
);

RecipeTable.propTypes = {
	recipes: PropTypes.array,
	location: PropTypes.object,
};

export default RecipeTable;
