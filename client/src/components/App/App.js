//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import SideBar from '../SideBar';
import { Layout, Loader } from '../Commons';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { recipeOperations } from 'redux/recipes';
import { ingredientOperations } from 'redux/ingredients';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const { user, loading } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(authOperations.getCurrentUser());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			dispatch(recipeOperations.getAllRecipes());
		}
	}, [dispatch, user]);

	useEffect(() => {
		if (user) {
			dispatch(ingredientOperations.getAllIngredients());
		}
	}, [dispatch, user]);

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
