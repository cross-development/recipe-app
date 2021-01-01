//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import bg_img from 'assets/food_bg.jpg';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export const StyledContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${bg_img});
	background-position: 0 0;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const StyledFormWrap = styled.div`
	width: 50%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StylesForm = styled(Form)`
	display: flex;
	flex-direction: column;
	padding: 2rem 3rem;
	width: 100%;

	@media (min-width: 768px) {
		justify-content: flex-start;
		background-color: rgba(0, 0, 0, 0.7);
		border: none;
		border-radius: 20px;
	}

	@media (min-width: 1440px) {
		width: 60%;
	}
`;

export const StyledLabel = styled.label`
	position: relative;
	display: block;
	margin-top: 2rem;

	&:last-of-type {
		margin-bottom: 3rem;
	}
`;

export const StyledInput = styled(Field)`
	display: block;
	color: #fff;
	font-size: 1.1rem;
	padding: 6px 20px 6px 30px;
	margin-top: 0.2rem;
	border: none;
	border-bottom: 2px solid #e0e0e0;
	width: 100%;
	outline: 0;
	background-color: transparent;
`;

export const StyledButton = styled.button`
	background-color: rgba(255, 255, 255, 0.8);
	border: none;
	color: #000;
	border-radius: 20px;
	padding: 0.7rem 0;
	cursor: pointer;
	transition: all 250ms linear;
	outline: none;
	width: 100%;
	margin: 0 auto;
	font-size: 1.1em;
	text-transform: uppercase;
	margin-bottom: 1rem;

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.3);
		background-color: #fff;
	}

	@media (min-width: 1440px) {
		width: 50%;
	}
`;

export const StyledLink = styled(Link)`
	background-color: transparent;
	border: 1px solid #fff;
	color: #fff;
	border-radius: 20px;
	padding: 0.7rem 0;
	cursor: pointer;
	transition: all 250ms linear;
	outline: none;
	width: 100%;
	margin: 0 auto;
	text-transform: uppercase;
	text-align: center;
	font-size: 1.1em;
	text-decoration: none;

	&:hover {
		box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.3);
	}

	@media (min-width: 1440px) {
		width: 50%;
	}
`;

export const StyledRequireMessage = styled.div`
	position: absolute;
	bottom: 26px;
	right: 0;
	background-color: #faf9ce;
	color: #000;
	padding: 0.2rem 0.4rem;
	border-radius: 4px;
	font-size: 12px;
	box-shadow: 0 0 8px #faf9ce;

	&::before {
		content: '';
		display: block;
		width: 10px;
		height: 10px;
		position: absolute;
		bottom: -6px;
		border-bottom-left-radius: 50px;
		border-bottom-right-radius: 50px;
		left: 0;
		background-color: #faf9ce;
	}
`;

export const StyledEmailIcon = styled(FaEnvelope)`
	position: absolute;
	bottom: 12px;
	left: 0;
	color: #e0e0e0;
`;

export const StyledPassIcon = styled(FaLock)`
	position: absolute;
	bottom: 12px;
	left: 0;
	color: #e0e0e0;
`;
