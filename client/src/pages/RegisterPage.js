//Core
import React from 'react';
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

	const handleSubmit = values => {
		const { username, email, password } = values;
		const credential = { username, email, password };

		dispatch(authOperations.userSignUp({ credential }));
	};

	return (
		<>
			<Register userInfo={initialState} handleSubmit={handleSubmit} />

			{error && <Error message={error.message} />}
		</>
	);
};

export default RegisterPage;
