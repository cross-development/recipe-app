//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StylesContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 15%;
`;

export const StyledImg = styled.img`
	width: 38px;
	height: 38px;
	display: block;
	border-radius: 50px;
`;

export const StyledName = styled.p`
	color: #98a0a6;
	font-size: 18px;
	line-height: 18px;
	font-weight: 400;
`;

export const StyledDropdown = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #98a0a6;
	transition: all 250ms linear;

	&:hover {
		color: #507bfc;
	}
`;

export const StyledMenu = styled.ul`
	position: absolute;
	top: 20px;
	left: -90px;
	width: auto;
	height: auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

export const StyledMenuItem = styled.li`
	background-color: #ffffff;
	width: 100%;
	list-style: none;

	&:hover {
		background-color: #507bfc;
	}
`;

export const StyledMenuLink = styled(Link)`
	color: #98a0a6;
	padding: 0.8rem 1rem;
	font-size: 16px;
	text-decoration: none;
	display: block;
	height: 100%;
	width: 100%;

	&:hover {
		color: #ffffff;
	}
`;
