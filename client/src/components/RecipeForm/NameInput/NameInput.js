//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styled
import { StyledLabel, StyledInput } from './NameInput.styles';

const NameInput = ({ name, onChangeRecipe }) => (
	<StyledLabel>
		Название
		<StyledInput
			type="text"
			name="name"
			autoComplete="off"
			value={name}
			onChange={onChangeRecipe}
			placeholder="Введите название рецепта"
		/>
	</StyledLabel>
);

NameInput.propTypes = {
	name: PropTypes.string.isRequired,
	onChangeRecipe: PropTypes.func.isRequired,
};

export default NameInput;
