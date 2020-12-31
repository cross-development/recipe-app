//Core
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...routeProps }) => {
	const { user } = useSelector(state => state.auth);

	return (
		<Route
			{...routeProps}
			render={props => (user ? <Component {...props} /> : <Redirect to="/login" />)}
		/>
	);
};

export default PrivateRoute;
