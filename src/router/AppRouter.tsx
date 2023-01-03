import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './Root';
import { ErrorPage, HomePage, DetailPage } from '../views';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />

            },
            {
                path: "movies",
                element: <DetailPage />
            }
        ]
    }
])

export const AppRouter = () => (<RouterProvider router={router} />)
