//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLabel, StyledInput } from './CookingInput.styles';

const CookingInput = ({ cookingTime, onChangeRecipe }) => (
	<StyledLabel>
		Время готовки, мин
		<StyledInput
			type="number"
			name="cookingTime"
			autoComplete="off"
			value={cookingTime}
			placeholder="Введите время"
			onChange={onChangeRecipe}
		/>
	</StyledLabel>
);

CookingInput.propTypes = {
	cookingTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChangeRecipe: PropTypes.func.isRequired,
};

export default CookingInput;
