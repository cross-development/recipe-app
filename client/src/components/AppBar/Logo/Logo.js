//Core
import React from 'react';
//Assets
import logo from 'assets/logo.jpg';
//Styles
import { StyledLogoContainer, StyledLogoLink, StyledLogoImg, StyledLogoText } from './Logo.styles';

const Logo = () => (
	<StyledLogoContainer>
		<StyledLogoLink to="/">
			<StyledLogoImg src={logo} />
		</StyledLogoLink>

		<StyledLogoText>Super Cook</StyledLogoText>
	</StyledLogoContainer>
);

export default Logo;
