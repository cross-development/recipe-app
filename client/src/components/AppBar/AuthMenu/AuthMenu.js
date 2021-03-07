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

const AuthMenu = ({ location }) => (
	<StyledNavContainer>
		<StyledNavMenu>
			<StyledNavItem>
				<StyledNavLink
					to={{
						pathname: '/sign-in',
						state: { from: location },
					}}
				>
					<StyledSignIn />
					Sign In
				</StyledNavLink>
			</StyledNavItem>

			<StyledNavItem>
				<StyledNavLink to="/sign-up">
					<StyledSignUp />
					Sign Up
				</StyledNavLink>
			</StyledNavItem>
		</StyledNavMenu>
	</StyledNavContainer>
);

export default AuthMenu;
