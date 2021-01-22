//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledList,
	StyledItem,
	StyledName,
	StyledAmount,
	StyledUnit,
	StyledButton,
} from './IngredientsList.styles';

const IngredientsList = ({ ingredients, onRemoveIngredient }) => (
	<StyledList>
		{ingredients.map(({ value, label, amount, unit }) => (
			<StyledItem key={value}>
				<StyledName>{label}</StyledName>
				<StyledAmount>{amount}</StyledAmount>
				<StyledUnit>{unit}</StyledUnit>
				<StyledButton id={value} onClick={onRemoveIngredient}>
					-
				</StyledButton>
			</StyledItem>
		))}
	</StyledList>
);

IngredientsList.propTypes = {
	ingredients: PropTypes.arrayOf(
		PropTypes.exact({
			value: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
			unit: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	onRemoveIngredient: PropTypes.func.isRequired,
};

export default IngredientsList;
