//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import Carousel from './Carousel';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledContainer, StyledLabel, StyledSelect } from './MainFilter.styles';

const MainFilter = () => {
	const [data, setData] = useState([]);

	const { categories, cuisines } = useSelector(state => state.recipes);

	const handleSetItem = id => console.log(id);

	return (
		<StyledContainer>
			<StyledLabel>
				Search by
				<StyledSelect>
					
				</StyledSelect>
			</StyledLabel>

			<Carousel onSetItem={handleSetItem} data={categories} />
		</StyledContainer>
	);
};

MainFilter.propTypes = {};

export default MainFilter;
