//Core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
//Components
import ItemsCarousel from 'react-items-carousel';
//Styles
import { StyledWrap, StyledItemWrap, StyledItem, StyledButton, StyledImg } from './Carousel.styles';
import { HiArrowNarrowLeft, HiArrowNarrowRight, HiHome } from 'react-icons/hi';

const Carousel = ({ data, pathToSearch, onChangeFilterId, onGoHome }) => {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	const carouselItems = data.map(({ _id, label, img }) => (
		<StyledItemWrap key={_id}>
			<StyledImg src={`${process.env.PUBLIC_URL}/icons/${pathToSearch}/${img}.png`} />

			<StyledItem onClick={() => onChangeFilterId(_id)}>{label}</StyledItem>
		</StyledItemWrap>
	));

	const buttonGoHome = (
		<StyledButton type="button" onClick={onGoHome}>
			<HiHome />
		</StyledButton>
	);

	return (
		<StyledWrap>
			<ItemsCarousel
				requestToChangeActive={setActiveItemIndex}
				activeItemIndex={activeItemIndex}
				numberOfCards={5}
				alwaysShowChevrons={true}
				gutter={10}
				leftChevron={
					!activeItemIndex ? (
						buttonGoHome
					) : (
						<StyledButton type="button">
							<HiArrowNarrowLeft />
						</StyledButton>
					)
				}
				rightChevron={
					<StyledButton type="button">
						<HiArrowNarrowRight />
					</StyledButton>
				}
				outsideChevron
				chevronWidth={40}
				children={carouselItems}
			/>
		</StyledWrap>
	);
};

Carousel.propTypes = {};

export default Carousel;
