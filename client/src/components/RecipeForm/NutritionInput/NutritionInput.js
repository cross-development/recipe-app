//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledWrapper, StyledLabel, StyledInput } from './NutritionInput.styles';

const NutritionInput = ({ protein, fat, carbs, kcal, onChangeRecipe }) => (
	<StyledWrapper>
		<StyledLabel>
			Белки, г
			<StyledInput
				name="protein"
				type="number"
				value={protein || ''}
				placeholder="0.00"
				onChange={onChangeRecipe}
			/>
		</StyledLabel>

		<StyledLabel>
			Жиры, г
			<StyledInput
				name="fat"
				type="number"
				value={fat || ''}
				placeholder="0.00"
				onChange={onChangeRecipe}
			/>
		</StyledLabel>

		<StyledLabel>
			Углеводы, г
			<StyledInput
				name="carbs"
				type="number"
				value={carbs || ''}
				placeholder="0.00"
				onChange={onChangeRecipe}
			/>
		</StyledLabel>

		<StyledLabel>
			Калорийность, ккал
			<StyledInput
				name="kcal"
				type="number"
				value={kcal || ''}
				placeholder="0.00"
				onChange={onChangeRecipe}
			/>
		</StyledLabel>
	</StyledWrapper>
);

NutritionInput.propTypes = {
	protein: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	fat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	carbs: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	kcal: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	onChangeRecipe: PropTypes.func.isRequired,
};

export default NutritionInput;
