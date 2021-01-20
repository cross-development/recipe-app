//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledLabel, StyledSelect } from './CuisineInput.styles';

const CuisineInput = ({ cuisine, onChangeRecipe }) => {
	const { cuisines } = useSelector(state => state.recipes);

	const memoCuisines = useMemo(
		() =>
			cuisines.reduce((acc, item) => {
				const option = (
					<option key={item._id} value={item._id}>
						{item.name}
					</option>
				);

				acc.push(option);

				return acc;
			}, []),
		[cuisines],
	);

	return (
		<StyledLabel>
			Кухня
			<StyledSelect name="cuisine" value={cuisine || 'Выберите кухню'} onChange={onChangeRecipe}>
				<option disabled>Выберите кухню</option>

				{memoCuisines}
			</StyledSelect>
		</StyledLabel>
	);
};

CuisineInput.propTypes = {
	cuisine: PropTypes.string.isRequired,
	onChangeRecipe: PropTypes.func.isRequired,
};

export default CuisineInput;
