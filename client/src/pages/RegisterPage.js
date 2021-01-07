//Core
import React from 'react';
import { useHistory } from 'react-router-dom';
//Components
import { Register } from 'components/Auth';
import { Error } from 'components/Commons';
//Redux
import { authOperations } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';

const initialState = {
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const RegisterPage = () => {
	const { error } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const history = useHistory();

	const handleSubmit = ({ username, email, password }) => {
		const credential = { username, email, password };

		dispatch(authOperations.userSignUp({ credential }));
		history.replace('/login');
	};

	return (
		<>
			<Register userInfo={initialState} handleSubmit={handleSubmit} />

			{error && <Error message={error.message} />}
		</>
	);
};

export default RegisterPage;
