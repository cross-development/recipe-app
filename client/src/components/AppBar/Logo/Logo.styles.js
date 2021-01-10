//Core
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLogoContainer = styled.div`
	display: flex;
`;

export const StyledLogoLink = styled(Link)`
	text-decoration: none;
	display: block;
	width: 50px;
	height: auto;
`;

export const StyledLogoImg = styled.img`
	width: 100%;
	height: 100%;
	display: block;
`;

export const StyledLogoText = styled.p`
	text-transform: uppercase;
	font-size: 1.5em;
`;
