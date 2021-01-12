//Core
import styled from 'styled-components';

export const StyledAddButton = styled.button`
	background-color: #24cca7;
	font-size: 40px;
	line-height: 24px;
	font-weight: 400;
	outline: none;
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 50%;
	padding: 1rem;
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	box-shadow: 0 0 14px #24cca7;
	transition: all 250ms linear;

	&:hover {
		box-shadow: 0px 10px 20px 0px rgba(36, 204, 176, 0.8);
	}
`;
