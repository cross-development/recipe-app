//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledButtonWrap, StyledButton } from './ButtonsGroup.styles';

const ButtonsGroup = ({ onToggleModalOpen }) => (
	<StyledButtonWrap>
		<StyledButton type="submit">Добавить</StyledButton>

		<StyledButton type="button" onClick={onToggleModalOpen}>
			Отмена
		</StyledButton>
	</StyledButtonWrap>
);

ButtonsGroup.propTypes = {
	onToggleModalOpen: PropTypes.func.isRequired,
};

export default ButtonsGroup;
