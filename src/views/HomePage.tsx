import React, { useEffect } from 'react';
import { Highlight, MovieSlider } from '../components/organism';
import { listService } from '../repository/services/listService';

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