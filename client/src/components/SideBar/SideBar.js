//Core
import React from 'react';
//Components
import Navigation from './Navigation';
//Styles
import { StyledAside } from './SideBar.styles';

const SideBar = () => (
	<StyledAside>
		<Navigation />
	</StyledAside>
);

export default SideBar;
