//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { LoaderWrapperDiv } from './Loader.styles';
import { css } from '@emotion/core';

//Custom css
const beatCss = css`
	display: block;
	margin: calc(100vh * 0.4) auto;
`;

const Loader = ({ onLoad }) => (
	<LoaderWrapperDiv>
		<BeatLoader size={40} color="#4a56e2" loading={onLoad} css={beatCss} />
	</LoaderWrapperDiv>
);

Loader.propTypes = {
	onLoad: PropTypes.bool,
};

Loader.defaultProps = {
	onLoad: false,
};

export default Loader;
