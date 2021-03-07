//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Logo from './Logo';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';
import SearchBar from './SearchBar';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { recipeOperations } from 'redux/recipes';
//Styles
import { StyledHeader } from './AppBar.styles';

const AppBar = () => {
	const location = useLocation();
	const dispatch = useDispatch();

	const { user } = useSelector(state => state.auth);

	const handleSubmit = query => dispatch(recipeOperations.getRecipeByQuery(query));

	return (
		<StyledHeader>
			<Logo />

			<SearchBar onSubmit={handleSubmit} />

			{user ? <UserMenu /> : <AuthMenu location={location} />}
		</StyledHeader>
	);
};

export default AppBar;
