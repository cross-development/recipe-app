//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledLabel, StyledSelect } from './CategoryInput.styles';

const CategoryInput = ({ category, onChangeRecipe }) => {
	const { categories } = useSelector(state => state.recipes);

	const memoCategories = useMemo(
		() =>
			categories.reduce((acc, item) => {
				const option = (
					<option key={item._id} value={item._id}>
						{item.name}
					</option>
				);

				acc.push(option);

				return acc;
			}, []),
		[categories],
	);

	return (
		<StyledLabel>
			Категория
			<StyledSelect
				name="category"
				value={category || 'Выберите категорию'}
				onChange={onChangeRecipe}
			>
				<option disabled>Выберите категорию</option>

				{memoCategories}
			</StyledSelect>
		</StyledLabel>
	);
};

CategoryInput.propTypes = {
	category: PropTypes.string.isRequired,
	onChangeRecipe: PropTypes.func.isRequired,
};

export default CategoryInput;
