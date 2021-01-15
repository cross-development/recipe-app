//Core
import React, { Suspense, useEffect } from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
//Components
import AppBar from '../AppBar';
import SideBar from '../SideBar';
import { Layout, Loader } from '../Commons';
//Redux
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { recipeOperations } from 'redux/recipes';
import { ingredientOperations } from 'redux/ingredients';
//Routes
import routes from 'router';
import PublicRoute from 'router/PublicRoute';
import PrivateRoute from 'router/PrivateRoute';

const App = () => {
	const dispatch = useDispatch();

	const isSignIn = useRouteMatch('/login');
	const isSignUp = useRouteMatch('/register');

	useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

	useEffect(() => dispatch(recipeOperations.getAllRecipes()), [dispatch]);

	useEffect(() => dispatch(recipeOperations.getRecipesCuisines()), [dispatch]);

	useEffect(() => dispatch(recipeOperations.getRecipesCategories()), [dispatch]);

	useEffect(() => dispatch(ingredientOperations.getIngredientsCategories()), [dispatch]);

	return (
		<>
			<AppBar />

			<Layout>
				{!isSignIn && !isSignUp ? <SideBar /> : null}

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
		</>
	);
};

export default App;
