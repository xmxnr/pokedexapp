import { configureStore } from '@reduxjs/toolkit';
import userData from './slices/user.slice';

export default configureStore({
	reducer: {
		userData,
	},
});
