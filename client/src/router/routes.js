//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Home',
		exact: true,
		private: false,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/register',
		label: 'Register',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Login',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
	{
		path: '/recipes',
		label: 'Recipes',
		exact: true,
		private: false,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/RecipesPage' /* webpackChunkName: "recipes-page"*/)),
	},
	{
		path: '/recipes/:id',
		label: 'RecipeDetails',
		exact: false,
		private: false,
		restricted: false,
		isNavigate: false,
		component: lazy(() =>
			import('pages/RecipeDetailsPage' /* webpackChunkName: "recipe-details-page"*/),
		),
	},
	{
		path: '/ingredients',
		label: 'Ingredients',
		exact: true,
		private: false,
		restricted: false,
		isNavigate: true,
		component: lazy(() =>
			import('pages/IngredientsPage' /* webpackChunkName: "ingredients-page"*/),
		),
	},
	{
		path: '/ingredients/:id',
		label: 'IngredientDetails',
		exact: false,
		private: false,
		restricted: false,
		isNavigate: false,
		component: lazy(() =>
			import('pages/IngredientDetailsPage' /* webpackChunkName: "ingredients-details-page"*/),
		),
	},
];

export default routes;
