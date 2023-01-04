import React from 'react';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => (

    <Provider store={store}>
        <AppRouter />
    </Provider>
);
