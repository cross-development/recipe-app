//Core
import React from 'react';
import PropTypes from 'prop-types';
//Styled
import { StyledArticle } from './Layout.styles';

const Layout = ({ children }) => <StyledArticle>{children}</StyledArticle>;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
