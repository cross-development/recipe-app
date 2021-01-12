//Core
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
//Components
import { Login } from 'components/Auth';
import { Error } from 'components/Commons';
//Redux
import { authOperations } from 'redux/auth';
import { useSelector, useDispatch } from 'react-redux';

const initialState = {
	email: '',
	password: '',
};

const LoginPage = () => {
	const dispatch = useDispatch();
	const { error } = useSelector(state => state.auth);

	const history = useHistory();
	const location = useLocation();

	const handleSubmit = values => {
		dispatch(authOperations.userSignIn({ ...values }));
		history.replace(location.state.from.pathname);
	};

	return (
		<>
			<Login userInfo={initialState} handleSubmit={handleSubmit} />

			{error && <Error message={error.message} />}
		</>
	);
};

export default LoginPage;
