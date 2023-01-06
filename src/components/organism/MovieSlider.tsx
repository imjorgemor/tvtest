import React, { Suspense, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { listService } from '../../repository/services/listService';
import { MovieCardItem } from '../atoms';
import { ListModel, ListItemModel } from '../../models/list/ListModel';

export interface Props {
    section: string
}

export const MovieSlider = ({ section}: Props) => {
    const [filmsByCategory, setFilmsByCategory] = useState<ListModel>();
    const sliderRef = useRef<HTMLDivElement>(null);
    const totalFilms = filmsByCategory?.contents.data.length;
    // I number of films visible per scrolling block get from useEffect I
    const [filmsVisible, setFilmsVisible] = useState(3);
    // II. number of blocks to move (min 1) calc from totalfilms / films visible
    const [totalSlides, setTotalSlides] = useState(2);
    // III. slide position visible
    const [slideNumber, setSlideNumber] = useState(1);
   

    //extract to customhook useFetch
    useEffect(() => {
        const movieList = async () => {
            const data = await listService().getByCategory(section);
            console.log(data);
            if (data.data) {
                setFilmsByCategory(data.data);
            }
        };
        movieList();
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
            setTotalSlides(3);
        } else if (sliderRef.current && window.innerWidth < 800) {
            setFilmsVisible(3);
            setTotalSlides(6);
            setSlideNumber(1);
            sliderRef.current.style.transform = `translateX(-${0}px)`;
        }
    };

    //in case of resize>800 and its screening the last slide (edge case)
    // it is not 100% perfect but still smooth effect on the user experience
    useEffect(() => {
        const handleSlidesWhenResize = () => {
            if (sliderRef.current && slideNumber > totalSlides) {
                setSlideNumber(1);
                sliderRef.current.style.transform = `translateX(-${0}px)`;
            }
        };
        handleSlidesWhenResize();
    }, [totalSlides]);

    useEffect(() => {
        handleWindowSize();
        handleTotalSlides();
    }, []);

    const handleTotalSlides = () => {
        totalFilms && setTotalSlides(Math.ceil(totalFilms / filmsVisible));
    };

    const handleClickRight = () => {
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
            setSlideNumber(slideNumber - 1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(-${distance * (slideNumber - 2)}px)`;
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
                        style={{ display: slideNumber === 1 ? 'none' : '' }}
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
                        style={{ display: slideNumber === totalSlides ? 'none' : '' }}

                    >
                        <ArrowRight />
                    </div>
                </div>
            </section>
        </Suspense>
    );
};

export default MovieSlider;