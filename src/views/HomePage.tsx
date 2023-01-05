import React from 'react';
import { Highlight, MovieSlider } from '../components/organism';

export const HomePage = () => {

    return (
        <>
            <Highlight />
            <div className='home-container'>
                <MovieSlider />
            </div>
        </>
    );
};

export default HomePage;