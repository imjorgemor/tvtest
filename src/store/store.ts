import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from './home/homeSlice';


export const store = configureStore({
    reducer: {
        homeSlice: homeSlice.reducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;