//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledContainer,
	StyledFormTitle,
	StyledForm,
	StyledLabel,
	StyledInput,
	StyledSelect,
	StyledTextArea,
	StyledCloseBtn,
	StyledButton,
} from './RecipeForm.styles';

const RecipeForm = ({ onToggleModalOpen }) => {
	return (
		<StyledContainer>
			<StyledForm>
				<StyledCloseBtn type="button" onClick={onToggleModalOpen}>
					&#10006;
				</StyledCloseBtn>

				<StyledFormTitle>Добавить транзакцию</StyledFormTitle>

				<StyledLabel>
					Название
					<StyledInput type="text" name="name" placeholder="Введите название блюда" />
				</StyledLabel>

				<StyledButton type="submit">Добавить</StyledButton>
				<StyledButton type="button">Отмена</StyledButton>
			</StyledForm>
		</StyledContainer>
	);
};

RecipeForm.propTypes = {};

export default RecipeForm;
