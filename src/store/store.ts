import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from './home/homeSlice';

export const store = configureStore({
    reducer: {
        homeSlice: homeSlice.reducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;