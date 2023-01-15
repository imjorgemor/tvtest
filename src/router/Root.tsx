import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/organism';
import ScrollTopRouter from './ScrollTopRouter';

export const Root = () => {

    return (
        <>
            <ScrollTopRouter>
                <Navbar />
                <Outlet />
            </ScrollTopRouter>
        </>
    );
};