//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledWrapper, StyledText } from './Notification.styles';

const Notification = ({ message }) => (
	<StyledWrapper>
		<StyledText>{message}</StyledText>
	</StyledWrapper>
);

Notification.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Notification;
