//Core
import React from 'react';
import PropTypes from 'prop-types';
//Redux
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
//Styles
import { StyledErrorDiv, StyledErrorP, StyledErrorBtn } from './Error.styles';

const Error = ({ message }) => {
	const dispatch = useDispatch();

	const handleCloseErrorWindow = () => dispatch(authOperations.unsetErrorMessage());

	return (
		<StyledErrorDiv>
			<StyledErrorBtn onClick={handleCloseErrorWindow}>&#10006;</StyledErrorBtn>
			<StyledErrorP>{message}</StyledErrorP>
		</StyledErrorDiv>
	);
};

Error.propTypes = {
	message: PropTypes.string.isRequired,
};

export default Error;
