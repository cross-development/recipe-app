//Core
import React from 'react';
//Styles
import {
	StyledNavContainer,
	StyledNavMenu,
	StyledNavItem,
	StyledNavLink,
	StyledSignIn,
	StyledSignUp,
} from './AuthMenu.styles';

const AuthMenu = () => (
	<StyledNavContainer>
		<StyledNavMenu>
			<StyledNavItem>
				<StyledNavLink to="/login">
					<StyledSignIn />
					Sign In
				</StyledNavLink>
			</StyledNavItem>

			<StyledNavItem>
				<StyledNavLink to="/register">
					<StyledSignUp />
					Sign Up
				</StyledNavLink>
			</StyledNavItem>
		</StyledNavMenu>
	</StyledNavContainer>
);

export default AuthMenu;
