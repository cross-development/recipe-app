//Core
import React from 'react';
import { useLocation } from 'react-router-dom';
//Components
import Logo from './Logo';
import AuthMenu from './AuthMenu';
import UserMenu from './UserMenu';
import SearchBar from './SearchBar';
//Redux
import { useSelector } from 'react-redux';
//Styles
import { StyledHeader } from './AppBar.styles';

const AppBar = () => {
	const location = useLocation();

	const { user } = useSelector(state => state.auth);

	const handleSubmit = value => {
		console.log(value);
	};

	return (
		<StyledHeader>
			<Logo />

			<SearchBar onSubmit={handleSubmit} />

			{user ? <UserMenu /> : <AuthMenu location={location} />}
		</StyledHeader>
	);
};

export default AppBar;
