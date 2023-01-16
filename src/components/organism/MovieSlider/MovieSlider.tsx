import { Suspense, lazy, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { ArrowLeft, ArrowRight } from '../../../assets/icons';
import { listService } from '../../../repository/services/listService';
import { ListModel } from '../../../models/list/ListModel';
import { useFetch, useSlider, useInfiniteScroll } from '../../../hooks';
import { Meta} from '../../../definitions';
import { MovieListSkeleton } from '../../molecules/MovieListSkeleton/MovieListSkeleton';
import { setErrorsList } from '../../../store/home';
import { SectionTitle, TitleSkeleton } from '../../atoms';
import { useNavigate } from 'react-router-dom';
const MovieList = lazy(() => import("../../molecules/MovieList/MovieList"));

export interface Props {
    section: string
}

export const MovieSlider = ({ section }: Props) => {
    const dispatch = useAppDispatch();
    const { showSlider, observeRef } = useInfiniteScroll();
    const { state: filmsByCategory, response } = useFetch<ListModel>(() => listService().getByCategory(section), showSlider);
    const navigate = useNavigate();

    const { handleClickLeft, handleClickRight, sliderRef, currentSlidePosition, isRepeating, totalSlides } = useSlider(filmsByCategory?.contents.data);
    const homeErrors = useAppSelector(state => state.home.errorsList);

    //if more than x categories fail do not show MovieList when a category endpoint gives an error redirect to error page. In localhost:3000 as the lists api gives a cors error 
    useEffect(() => {
        if (response === Meta.ERROR) {
            dispatch(setErrorsList());
        }
        if (homeErrors > 5) {
            navigate('/not_found');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    if (response === Meta.ERROR) return <></>;

    return (
        <Suspense>
            <section className='slider-wrapper' >
                <div ref={observeRef}>
                    {
                        filmsByCategory && showSlider
                            ? <SectionTitle>{filmsByCategory.name}</SectionTitle>
                            : <TitleSkeleton />
                    }
                </div>
                <div className='list-wrapper'>
                    <div
                        className='list-arrow list-arrow--left'
                        style={{ display: currentSlidePosition === 1 && !isRepeating ? 'none' : '' }}
                        onClick={() => handleClickLeft()}
                    >
                        <ArrowLeft />
                    </div>

                    <div className="list-container" ref={sliderRef}>
                        {
                            filmsByCategory?.contents.data && showSlider
                                ? <MovieList movieList={filmsByCategory?.contents.data}/>
                                : <MovieListSkeleton />
                        }
                    </div>
                    <div
                        style={{ display: currentSlidePosition >= totalSlides && !isRepeating? 'none' : '' }}
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