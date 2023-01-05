import React from 'react';
import { Link } from 'react-router-dom';
import { TvTestLogo } from '../../assets/svg';
import { useBackground } from '../../hooks/useBackground';

export const Navbar = () => {
    const {background} = useBackground(1);
    
    return (
        <nav className={!background ?'navbar-wrapper': 'navbar-wrapper navbar-wrapper--black'}>
            <Link to='/'>
                <TvTestLogo />
            </Link>
        </nav>
    );
};