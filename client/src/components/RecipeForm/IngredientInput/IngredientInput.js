//Core
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
//Styles
import {
	StyledWrapper,
	StyledLabel,
	StyledNameInput,
	StyledAmountInput,
	StyledSelect,
	StyledButton,
} from './IngredientInput.styles';

const ingredientUnits = [
	'кг',
	'г',
	'л',
	'мл',
	'шт',
	'стакан',
	'ст.л.',
	'ч.л.',
	'щепотка',
	'по вкусу',
];

const initialIngredientState = {
	info: '',
	amount: 0,
	unit: '',
};

const IngredientInput = ({ onAddIngredient }) => {
	const [ingredient, setIngredient] = useState(initialIngredientState);

	const handleChangeIngredient = ({ target: { name, value } }) =>
		setIngredient(prevState => ({ ...prevState, [name]: value }));

	const handleAddIngredient = () => onAddIngredient(ingredient);

	const memoUnits = useMemo(
		() =>
			ingredientUnits.reduce((acc, item) => {
				const option = (
					<option key={item} value={item}>
						{item}
					</option>
				);

				acc.push(option);

				return acc;
			}, []),
		[],
	);

	return (
		<StyledWrapper>
			<StyledLabel>
				<StyledNameInput
					name="info"
					type="text"
					value={ingredient.info}
					onChange={handleChangeIngredient}
				/>
			</StyledLabel>

			<StyledLabel>
				<StyledAmountInput
					name="amount"
					type="number"
					value={ingredient.amount}
					onChange={handleChangeIngredient}
				/>
			</StyledLabel>

			<StyledLabel>
				<StyledSelect
					name="unit"
					value={ingredient.unit || 'Выберите меру'}
					onChange={handleChangeIngredient}
				>
					<option disabled>Выберите меру</option>

					{memoUnits}
				</StyledSelect>
			</StyledLabel>

			<StyledButton type="button" onClick={handleAddIngredient}>
				+
			</StyledButton>
		</StyledWrapper>
	);
};

IngredientInput.propTypes = {
	onAddIngredient: PropTypes.func.isRequired,
};

export default IngredientInput;
