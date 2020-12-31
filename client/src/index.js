import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Styles
import GlobalStyle from './index.styles';

ReactDOM.render(
	<>
		<App />

		<GlobalStyle />
	</>,
	document.getElementById('root'),
);
