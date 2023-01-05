import React, { Suspense, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { listService } from '../../repository/services/listService';
import { MovieCardItem } from '../atoms';
import { ListModel, ListItemModel } from '../../models/list/ListModel';

export interface Props {
    section?: string
}

export const MovieSlider = ({ section }: Props) => {
    const [sliderIsMoving, setSliderIsMoving] = useState(false);
    const [sliderNumber, setSliderNumber] = useState(0);
    const [filmsByCategory, setFilmsByCategory] = useState<ListModel>();
    const sliderRef = useRef<HTMLDivElement>(null);
    console.log(filmsByCategory?.contents.data);

    useEffect(() => {
        const movieList = async () => {
            const data = await listService().getByCategory('gratis-la-mejor-seleccion-de-peliculas');
            if (data.data) {
                setFilmsByCategory(data.data);
            }
        };
        movieList();
    }, []);


    const handleClick = (direction: string) => {
        setSliderIsMoving(true);
        const distance = sliderRef.current ? sliderRef.current.getBoundingClientRect().x - 50 : 0;
        if (direction === 'left' && sliderNumber > 0) {
            setSliderNumber(sliderNumber - 1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(${230 + distance}px)`;
            }
        }

        if (direction === 'right' && sliderNumber < 5) {
            setSliderNumber(sliderNumber + 1);
            if (sliderRef.current) {
                sliderRef.current.style.transform = `translateX(${-230 + distance}px)`;
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
                        className='list-arrow--left'
                        style={{ display: !sliderIsMoving ? 'none' : '' }}
                        onClick={() => handleClick('left')}
                    >
                        <ArrowLeft />
                    </div>

                    <div className="list-container" ref={sliderRef}>
                        {
                            filmsByCategory?.contents.data.map((film: ListItemModel) => (
                                <MovieCardItem
                                    key={film.id}
                                    filmTitle={film.title}
                                    artwork={film.images.artwork}
                                />
                            )
                            )
                        }
                    </div>

                    <div
                        className='list-arrow--right'
                        onClick={() => handleClick('right')}
                    >
                        <ArrowRight />
                    </div>
                </div>
            </section>
        </Suspense>
    );
};

export default MovieSlider;