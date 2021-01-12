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
					<StyledTitle>{name}</StyledTitle>
					<StyledCategory>{category}</StyledCategory>
					<StyledCuisine>{cuisine}</StyledCuisine>
					<StyledCooking>{cookingTime}</StyledCooking>
					<StyledNutrition>
						<StyledNutritionItem>{nutrition.protein}</StyledNutritionItem>
						<StyledNutritionItem>{nutrition.fat}</StyledNutritionItem>
						<StyledNutritionItem>{nutrition.carbs}</StyledNutritionItem>
						<StyledNutritionItem>{nutrition.kcal}</StyledNutritionItem>
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
