import React from 'react';
import { Highlight, MovieSlider } from '../components/organism';
import { filmSections } from '../definitions';


export const HomePage = () => {


    return (
        <>
            <Highlight />
            <div className='home-container'>
                <MovieSlider section={filmSections.bestSelection}/>
                <MovieSlider section={filmSections.trending}/>
                <MovieSlider section={filmSections.christmas}/>
                <MovieSlider section={filmSections.action}/>
                <MovieSlider section={filmSections.suspense}/>
                <MovieSlider section={filmSections.drama}/>
                <MovieSlider section={filmSections.family}/>
            </div>
        </>
    );
};

export default HomePage;