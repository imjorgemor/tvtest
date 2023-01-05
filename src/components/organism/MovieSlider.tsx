import React, { Suspense, useRef } from 'react';
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { MovieCardItem } from '../atoms';
import { useState } from 'react';


export const MovieSlider = () => {
    const [sliderIsMoving, setSliderIsMoving] = useState(false);

    const [sliderNumber, setSliderNumber] = useState(0);

    const sliderRef= useRef<HTMLDivElement>(null);

    const handleClick = (direction: string) => {
        setSliderIsMoving(true);
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().x - 50 : 0;
        if (direction === 'left' && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1);
            if (sliderRef.current){
                sliderRef.current.style.transform = `translateX(${230 + distance}px)`; 
            }
          
        }
        if (direction === 'right' && sliderNumber <5 ) {
            setSliderNumber(sliderNumber + 1);
            if (sliderRef.current){
                sliderRef.current.style.transform = `translateX(${-230 + distance}px)`; 
            }
        }

    };


    return (

        <section>
            <div>
                <Suspense fallback={<h1>loading title</h1>}>
                    <h5>GRATIS | La mejor selección de peliculas</h5>
                </Suspense>
            </div>
            <div className='list-wrapper'>
                <div
                    className='list-arrow--left'
                    style={{display:!sliderIsMoving ? 'none': ''}}
                    onClick={() => handleClick('left')}
                >
                    <ArrowLeft />
                </div>
                <div className="list-container" ref={sliderRef}>
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                    <MovieCardItem />
                </div>
                <div
                    className='list-arrow--right'
                    onClick={() => handleClick('right')}
                >
                    <ArrowRight />
                </div>
            </div>
        </section>
    );
};

export default MovieSlider;