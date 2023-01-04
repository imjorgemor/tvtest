import React from 'react';
import { Outlet } from 'react-router-dom';
import {Navbar} from '../components/organism';

export const Root = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};