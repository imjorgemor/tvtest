import React, { Suspense, lazy} from 'react';
import { ArrowLeft, ArrowRight } from '../../assets/icons';
import { listService } from '../../repository/services/listService';
import { ListModel} from '../../models/list/ListModel';
import { useFetch, useSlider, useInfiniteScroll } from '../../hooks';
import { Meta, numberFilmsPerSection } from '../../definitions';
import { MovieListSkeleton } from '../molecules/MovieListSkeleton';
const MovieList = lazy(()=> import("../molecules/MovieList"));

export interface Props {
    section: string
}

export const MovieSlider = ({ section }: Props) => {
    const { state: filmsByCategory, response } = useFetch<ListModel>(() => listService().getByCategory(section));
    const totalFilms = filmsByCategory?.contents.data.length;

    const {handleClickLeft, handleClickRight, sliderRef, slideNumber, totalSlides} = useSlider(totalFilms? totalFilms : numberFilmsPerSection);

    const { showSlider, observeRef } = useInfiniteScroll();

    if (response === Meta.ERROR) return <></>;

    return (
        <Suspense>
            <section >
                <div ref={observeRef}>
                    <h5>{filmsByCategory && showSlider? filmsByCategory.name : "loading..."}</h5>
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
                            filmsByCategory?.contents.data && showSlider
                                ? <MovieList movieList={filmsByCategory?.contents.data} />
                                : <MovieListSkeleton />
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