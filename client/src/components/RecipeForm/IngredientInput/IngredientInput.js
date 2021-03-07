//Core
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
//Components
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { ingredientOperations } from 'redux/ingredients';
//Styles
import {
	StyledWrapper,
	StyledLabel,
	StyledAmount,
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
	value: '',
	label: '',
	amount: 0,
	unit: '',
};

const IngredientInput = ({ onAddIngredient }) => {
	const [ingredient, setIngredient] = useState(initialIngredientState);
	const [ingredientCategory, setIngredientCategory] = useState(null);

	const dispatch = useDispatch();

	const {
		categories,
		allIngredients: { results },
	} = useSelector(state => state.ingredients);

	const handleChangeIngredient = ({ target: { name, value } }) =>
		setIngredient(prevState => ({ ...prevState, [name]: value }));

	const onChangeSelect = ({ value, label }) =>
		setIngredient(prevState => ({ ...prevState, value, label }));

	const fetchIngredients = value => {
		ingredientCategory &&
			value.length > 2 &&
			dispatch(ingredientOperations.getIngredientByQuery(value, ingredientCategory.label));
	};

	const loadOptions = async (value, callback) => {
		await fetchIngredients(value);

		const data = await results.map(({ _id, name }) => ({ label: name, value: _id }));
		callback(data);
	};

	const handleAddIngredient = () => {
		onAddIngredient(ingredient);
		setIngredient(initialIngredientState);
	};

	const memoCategories = useMemo(
		() => categories.map(({ _id, name }) => ({ label: name, value: _id })),
		[categories],
	);

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
				Категория
				<Select
					value={ingredientCategory}
					options={memoCategories}
					placeholder={'Выберите категорию'}
					onChange={setIngredientCategory}
				/>
			</StyledLabel>

			<StyledLabel>
				Название
				<AsyncSelect
					cacheOptions
					value={ingredient}
					onChange={onChangeSelect}
					loadOptions={loadOptions}
					placeholder={'Введите название'}
				/>
			</StyledLabel>

			<StyledLabel>
				Количество
				<StyledAmount
					name="amount"
					type="number"
					autoComplete="off"
					placeholder={'Введите количество'}
					value={ingredient.amount || ''}
					onChange={handleChangeIngredient}
				/>
			</StyledLabel>

			<StyledLabel>
				Мера
				<StyledSelect
					name="unit"
					required={true}
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
