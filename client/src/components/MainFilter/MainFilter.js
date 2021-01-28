//Core
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
//Components
import Carousel from './Carousel';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledContainer, StyledLabel, StyledSelect } from './MainFilter.styles';

const filterOptions = [
	{ value: 'category', label: 'Категории' },
	{ value: 'cuisine', label: 'Кухни' },
];

const MainFilter = ({ onChangeFilterId, onChangeFilterCategory, filter }) => {
	const { categories, cuisines } = useSelector(state => state.recipes);

	const data = filter === filterOptions[0].value ? categories : cuisines;

	const memoOptions = useMemo(
		() =>
			filterOptions.reduce((acc, item) => {
				const option = (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				);

				acc.push(option);

				return acc;
			}, []),
		[],
	);

	return (
		<StyledContainer>
			<StyledLabel>
				Поиск по:
				<StyledSelect name="filterCategory" value={filter} onChange={onChangeFilterCategory}>
					{memoOptions}
				</StyledSelect>
			</StyledLabel>

			<Carousel data={data} pathToSearch={filter} onChangeFilterId={onChangeFilterId} />
		</StyledContainer>
	);
};

MainFilter.propTypes = {};

export default MainFilter;
