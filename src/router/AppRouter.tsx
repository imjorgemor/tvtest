import React from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Root } from './Root';
import { ErrorPage, HomePage, DetailPage } from '../views';

export const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
                <Route index element={<HomePage />} />
                <Route path="/movies/:id" element={<DetailPage />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
};
