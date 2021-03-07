//Core
import axios from 'axios';
//Redux
import authActions from './auth.actions';
//Services
import token from 'services/axios.configs';

const userSignUp = ({ credential }) => dispatch => {
	dispatch(authActions.userSignUpRequest());

	axios
		.post('/api/auth/sign-up', credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.userSignUpSuccess(data));
		})
		.catch(error => dispatch(authActions.userSignUpFailure(error)));
};

const userSignIn = credential => dispatch => {
	dispatch(authActions.userSignInRequest());

	axios
		.post('/api/auth/sign-in', credential)
		.then(({ data }) => {
			token.set(data.token);
			dispatch(authActions.userSignInSuccess(data));
		})
		.catch(error => dispatch(authActions.userSignInFailure(error)));
};

const userSighOut = () => dispatch => {
	dispatch(authActions.userSighOutRequest());

	axios
		.post('/api/auth/sign-out')
		.then(() => {
			token.unset();
			dispatch(authActions.userSighOutSuccess());
		})
		.catch(error => dispatch(authActions.userSighOutFailure(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
	const state = getState();
	const { token: existToken } = state.auth;

	if (!existToken) return;

	token.set(existToken);
	dispatch(authActions.getCurrentUserRequest());

	axios
		.get('/api/users/current')
		.then(({ data }) => dispatch(authActions.getCurrentUserSuccess(data)))
		.catch(error => dispatch(authActions.getCurrentUserFailure(error)));
};

const unsetErrorMessage = () => dispatch => dispatch(authActions.unsetErrorMessage());

const authOperations = {
	userSignUp,
	userSignIn,
	userSighOut,
	getCurrentUser,
	unsetErrorMessage,
};

export default authOperations;
