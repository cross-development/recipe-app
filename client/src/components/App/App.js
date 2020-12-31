//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import SideBar from '../SideBar';
import { Layout, Loader } from '../Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
// import { authOperations } from 'redux/auth';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { user, loading } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	return (
		<Router>
			{user && <AppBar />}

			{loading && <Loader onLoad={loading} />}

			<Layout>
				{user && <SideBar />}

				<Suspense fallback={<Loader onLoad={true} />}>
					<Switch>
						{routes.map(route =>
							route.private ? (
								<PrivateRoute key={route.path} {...route} />
							) : (
								<PublicRoute key={route.path} {...route} />
							),
						)}
					</Switch>
				</Suspense>
			</Layout>
		</Router>
	);
};

export default App;
