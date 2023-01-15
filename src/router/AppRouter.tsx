import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { Root } from './Root';
import { ErrorPage, HomePage, DetailPage, StreamPage } from '../views';


export const AppRouter = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Root />} errorElement={<ErrorPage />}>
                <Route index element={<HomePage />} />
                <Route path='/not_found' element={<ErrorPage/>}/>
                <Route path="/movies/:id" element={<DetailPage />} />
                <Route path="/player/movies/stream/:id" element={<StreamPage />} />
            </Route>
        )
    );

    return (
            <RouterProvider router={router} />
    );
};
