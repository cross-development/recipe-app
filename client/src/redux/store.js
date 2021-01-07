//Core
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//Redux
import { authReducers } from './auth';
import { recipeReducers } from './recipes';
import { ingredientReducers } from './ingredients';

const authPersistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const store = configureStore({
	reducer: {
		auth: persistReducer(authPersistConfig, authReducers),
		recipes: recipeReducers,
		ingredients: ingredientReducers,
	},

	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);
