//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledList = styled.ul`
	display: grid;
	max-width: calc(100vw - 77px);
	grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
	grid-gap: 16px;
	margin: 0 auto;
	padding: 0;
	list-style: none;
`;

export const StyledListItem = styled.li`
	position: relative;
	border-radius: 2px;
	text-align: center;
	padding: 2px 2px 10px;
	background: #f7efe3;
	box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
		0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledItemLink = styled(Link)`
	text-decoration: none;
	font-size: 18px;
	line-height: 22px;
	font-weight: 400;
	color: #000;
`;

export const StyledImg = styled.img`
	width: 100%;
	height: 260px;
	object-fit: cover;
	margin-bottom: 10px;
	border-radius: 4px;
	transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover {
		transform: scale(0.98);
		cursor: pointer;
	}
`;

export const StyledTitle = styled.p``;

export const StyledCategory = styled.p``;

export const StyledCuisine = styled.p``;

export const StyledCooking = styled.p``;

export const StyledNutrition = styled.ul``;

export const StyledNutritionItem = styled.li``;
