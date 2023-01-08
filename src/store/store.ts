import { configureStore } from '@reduxjs/toolkit';
import { home } from './home/homeSlice';
import {stream} from './stream/streamSlice';

export const store = configureStore({
    reducer: {
        home: home.reducer,
        streamContent: stream.reducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;