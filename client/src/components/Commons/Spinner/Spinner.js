//Core
import React from 'react';
import PropTypes from 'prop-types';
//Additional components
import PulseLoader from 'react-spinners/PulseLoader';
//Styles
import { css } from '@emotion/core';

const beatCss = css`
	display: block;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 50%;
	transform: translateX(-50%);
`;

const Spinner = ({ onLoad }) => (
	<PulseLoader size={15} color="#4a56e2" loading={onLoad} css={beatCss} />
);

Spinner.propTypes = {
	onLoad: PropTypes.bool,
};

Spinner.defaultProps = {
	onLoad: false,
};

export default Spinner;
