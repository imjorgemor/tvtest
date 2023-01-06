import React, { Suspense, useEffect, useRef, useState, useLayoutEffect } from 'react';
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { listService } from '../../repository/services/listService';
import { MovieCardItem } from '../atoms';
import { ListModel, ListItemModel } from '../../models/list/ListModel';

export interface Props {
    section?: string
}

export const MovieSlider = ({ section = 'gratis-la-mejor-seleccion-de-peliculas' }: Props) => {
    const [filmsByCategory, setFilmsByCategory] = useState<ListModel>();
    const sliderRef = useRef<HTMLDivElement>(null);
    const totalFilms = filmsByCategory?.contents.data.length;

    //slider logic in action
    //prev. determine if the slider has been moved to display the left arrow handler
    const [sliderHasMoved, setSliderHasMoved] = useState(false);

    // I number of films visible per scrolling block get from useEffect I
    const [filmsVisible, setFilmsVisible] = useState(3);
    // II. number of blocks to move (min 1) calc from totalfilms / films visible
    const [totalSlides, setTotalSlides] = useState(2);
    // III. slide position visible
    const [slideNumber, setSlideNumber] = useState(1);
    console.log(slideNumber);

    //extract to customhook useFetch
    useEffect(() => {
        const movieList = async () => {
            const data = await listService().getByCategory(section);
            if (data.data) {
                setFilmsByCategory(data.data);
            }
        };
        movieList();
        handleWindowSize();
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleWindowSize);
        return () => {
            window.removeEventListener('resize', handleWindowSize);
        };
    }, []);


    // handle window resize and sets items in row
    const handleWindowSize = () => {
        if (window.innerWidth >= 800) {
            setFilmsVisible(6);
        } else if (window.innerWidth >= 450) {
            setFilmsVisible(4);
        } else if (window.innerWidth < 450) {
            setFilmsVisible(3);
        }
    };

    const handleClickRight = () => {
        setSliderHasMoved(true);
        totalFilms && setTotalSlides(Math.ceil(totalFilms/filmsVisible));
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0;

        if (slideNumber < totalSlides) {
            setSlideNumber(slideNumber + 1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${distance * slideNumber}px)`;
            }
        }
    };

    const handleClickLeft = () => {
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().width : 0;
        
        if (slideNumber > 1) {
            setSlideNumber(slideNumber -1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${distance * (slideNumber-2)}px)`;
            }
        }
    };


    return (
        <Suspense>
            <section>
                <div>
                    <h5>{filmsByCategory ? filmsByCategory.name : "loading..."}</h5>
                </div>
                <div className='list-wrapper'>
                    <div
                        className='list-arrow list-arrow--left'
                        style={{ display: !sliderHasMoved ? 'none' : '' }}
                        onClick={() => handleClickLeft()}
                    >
                        <ArrowLeft />
                    </div>

                    <div className="list-container" ref={sliderRef}>
                        {
                            filmsByCategory?.contents.data
                                ? filmsByCategory?.contents.data.map((film: ListItemModel) => (
                                    <MovieCardItem
                                        key={film.id}
                                        filmTitle={film.title}
                                        artwork={film.images.artwork}
                                    />
                                ))
                                : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number, id) => (
                                    <MovieCardItem
                                        key={id}
                                    />
                                ))
                        }
                    </div>
                    <div
                        className='list-arrow list-arrow--right'
                        onClick={() => handleClickRight()}
                    >
                        <ArrowRight />
                    </div>
                </div>
            </section>
        </Suspense>
    );
};

export default MovieSlider;