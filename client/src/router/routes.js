//Core
import { lazy } from 'react';

const routes = [
	{
		path: '/',
		label: 'Главная',
		exact: true,
		private: false,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/HomePage' /* webpackChunkName: "home-page" */)),
	},
	{
		path: '/register',
		label: 'Регистрация',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)),
	},
	{
		path: '/login',
		label: 'Вход',
		exact: true,
		private: false,
		restricted: true,
		isNavigate: false,
		component: lazy(() => import('pages/LoginPage' /* webpackChunkName: "login-page"*/)),
	},
	{
		path: '/recipes',
		label: 'Рецепты',
		exact: true,
		private: false,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/RecipesPage' /* webpackChunkName: "recipes-page"*/)),
	},
	{
		path: '/recipes/:id',
		label: 'Рецепт',
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
		label: 'Ингредиенты',
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
		label: 'Ингредиент',
		exact: false,
		private: false,
		restricted: false,
		isNavigate: false,
		component: lazy(() =>
			import('pages/IngredientDetailsPage' /* webpackChunkName: "ingredients-details-page"*/),
		),
	},
	{
		path: '/my-recipes',
		label: 'Мои рецепты',
		exact: true,
		private: true,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/MyRecipesPage' /* webpackChunkName: "my-recipes-page"*/)),
	},
	{
		path: '/fav-recipes',
		label: 'Избранные рецепты',
		exact: true,
		private: true,
		restricted: false,
		isNavigate: true,
		component: lazy(() => import('pages/FavRecipesPage' /* webpackChunkName: "fav-recipes-page"*/)),
	},
	{
		path: '/fav-ingredients',
		label: 'Избранные продукты',
		exact: true,
		private: true,
		restricted: false,
		isNavigate: true,
		component: lazy(() =>
			import('pages/FavIngredientsPage' /* webpackChunkName: "fav-ingredients-page"*/),
		),
	},
];

export default routes;
