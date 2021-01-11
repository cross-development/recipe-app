//Core
import React from 'react';
//Redux
import { useSelector } from 'react-redux';
//Routes
import routes from 'router';
//Styles
import { StyledNavWrap, StyledNavigation, StyledNavItem, StyledNavLink } from './Navigation.styles';

const Navigation = () => {
	const { user } = useSelector(state => state.auth);

	return (
		<StyledNavWrap>
			<StyledNavigation>
				{routes.map(
					route =>
						route.isNavigate &&
						!route.private && (
							<StyledNavItem key={route.label}>
								<StyledNavLink to={route.path} exact={route.exact}>
									{route.label}
								</StyledNavLink>
							</StyledNavItem>
						),
				)}

				{user &&
					routes.map(
						route =>
							route.isNavigate &&
							route.private && (
								<StyledNavItem key={route.label}>
									<StyledNavLink to={route.path} exact={route.exact}>
										{route.label}
									</StyledNavLink>
								</StyledNavItem>
							),
					)}
			</StyledNavigation>
		</StyledNavWrap>
	);
};

export default Navigation;
