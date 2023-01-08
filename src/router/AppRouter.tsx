import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Root } from './Root';
import { ErrorPage, HomePage, StreamPage } from '../views';

const DetailPage = lazy(() => import(/*webpackChunkName: "LazyPage1" */ "../views/DetailPage"));


export const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
                <Route index element={<HomePage />} />
                <Route path="/movies/:id" element={<DetailPage />} />
                <Route path="/player/movies/stream/:id" element={<StreamPage />} />
            </Route>
        )
    );

    return (
        <Suspense>
            <RouterProvider router={router} />
        </Suspense>
    );
};
