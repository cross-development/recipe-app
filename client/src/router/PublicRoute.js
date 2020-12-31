//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const PublicRoute = ({ component: Component, ...routeProps }) => {
	const { user } = useSelector(state => state.auth);

	return (
		<Route
			{...routeProps}
			render={props =>
				user && routeProps.restricted ? <Redirect to="/" /> : <Component {...props} />
			}
		/>
	);
};

export default PublicRoute;
