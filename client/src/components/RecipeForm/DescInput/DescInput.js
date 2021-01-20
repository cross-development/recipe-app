//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledLabel, StyledTextArea } from './DescInput.styles';

const DescInput = ({ description, onChangeRecipe }) => (
	<StyledLabel>
		Приготовление:
		<StyledTextArea name="description" type="text" value={description} onChange={onChangeRecipe} />
	</StyledLabel>
);

DescInput.propTypes = {
	description: PropTypes.string.isRequired,
	onChangeRecipe: PropTypes.func.isRequired,
};

export default DescInput;
