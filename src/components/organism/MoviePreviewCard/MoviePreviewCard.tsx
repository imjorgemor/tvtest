import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../../hooks';
import { MovieModel } from '../../../models/movie';
import { movieService } from '../../../repository/services';
import { MovieHighlight } from '../../molecules';
import { MovieHighlightSkeleton } from '../../atoms/MovieHighlightSkeleton/MovieHighlightSkeleton';

export const MoviePreviewCard = () => {
    const { id } = useParams();
    const { state: movie, response } = useFetch<MovieModel>(() => movieService().getByMovieTitle(id ? id : ""), true);

    return (
        <Suspense>
            <section>
                {
                    movie
                        ? <MovieHighlight movie={movie}/>
                        : <MovieHighlightSkeleton />
                }
            </section>
        </Suspense>

    );
};