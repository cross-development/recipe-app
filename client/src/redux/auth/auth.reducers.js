//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './auth.actions';

//User reducer
const user = createReducer(null, {
	[authActions.getCurrentUserSuccess]: (state, { payload }) => payload,
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.user,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.user,
	[authActions.userSighOutSuccess]: () => null,
});

//Token reducer
const token = createReducer(null, {
	[authActions.userSignUpSuccess]: (state, { payload }) => payload.token,
	[authActions.userSignInSuccess]: (state, { payload }) => payload.token,
	[authActions.userSighOutSuccess]: () => null,
});

//Error reducer
const error = createReducer(null, {
	[authActions.getCurrentUserFailure]: (state, { payload }) => payload,
	[authActions.userSignUpFailure]: (state, { payload }) => payload,
	[authActions.userSignInFailure]: (state, { payload }) => payload,
	[authActions.userSighOutFailure]: (state, { payload }) => payload,
	[authActions.unsetErrorMessage]: (state, { payload }) => null,
});

//Loading reducer
const loading = createReducer(false, {
	[authActions.getCurrentUserRequest]: () => true,
	[authActions.getCurrentUserSuccess]: () => false,
	[authActions.getCurrentUserFailure]: () => false,

	[authActions.userSignUpRequest]: () => true,
	[authActions.userSignUpSuccess]: () => false,
	[authActions.userSignUpFailure]: () => false,

	[authActions.userSignInRequest]: () => true,
	[authActions.userSignInSuccess]: () => false,
	[authActions.userSignInFailure]: () => false,

	[authActions.userSighOutRequest]: () => true,
	[authActions.userSighOutSuccess]: () => false,
	[authActions.userSighOutFailure]: () => false,
});

export default combineReducers({
	user,
	token,
	error,
	loading,
});
