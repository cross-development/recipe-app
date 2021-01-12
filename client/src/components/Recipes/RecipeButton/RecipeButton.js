//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledAddButton } from './RecipeButton.styles';

const RecipeButton = ({ isModalOpen, onToggleModalOpen }) => (
	<StyledAddButton disabled={isModalOpen} onClick={onToggleModalOpen}>
		+
	</StyledAddButton>
);

RecipeButton.propTypes = {
	isModalOpen: PropTypes.bool.isRequired,
	onToggleModalOpen: PropTypes.func.isRequired,
};

export default RecipeButton;
