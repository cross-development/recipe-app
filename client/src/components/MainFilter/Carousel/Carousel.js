//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import ItemsCarousel from 'react-items-carousel';
//Styles
import { StyledSliderWrap, StyledItemWrap, StyledItem, StyledButton } from './Carousel.styles';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const Carousel = ({ data, onSetItem }) => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const carouselItems = data.map(({ _id, name }) => (
		<StyledItemWrap key={_id}>
			<StyledItem onClick={() => onSetItem(_id)}>{name}</StyledItem>
		</StyledItemWrap>
	));

	return (
		<StyledSliderWrap>
			<ItemsCarousel
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={5}
				gutter={10}
				leftChevron={
					<StyledButton>
						<HiArrowNarrowLeft />
					</StyledButton>
				}
				rightChevron={
					<StyledButton>
						<HiArrowNarrowRight />
					</StyledButton>
				}
				outsideChevron
				chevronWidth={40}
				children={carouselItems}
			/>
		</StyledSliderWrap>
	);
};

Carousel.propTypes = {};

export default Carousel;
