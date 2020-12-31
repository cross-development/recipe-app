import React from 'react';
import ReactDOM from 'react-dom';
//Components
import App from 'components/App';
//Redux
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
//Styles
import GlobalStyles from './index.styles';

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />

			<GlobalStyles />
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);
