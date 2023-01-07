import React, { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks';
import { MovieModel } from '../../models/movie';
import { movieService } from '../../repository/services';
import { MovieHighlight } from '../molecules';
import { MovieHighlightSkeleton } from '../atoms/MovieHighlightSkeleton';

export const MoviePreviewCard = () => {
    const { id } = useParams();
    const { state: movie, response } = useFetch<MovieModel>(() => movieService().getByMovieTitle(id ? id : ""), true);

    return (
        <Suspense>
            <section>
                {
                    movie
                        ? <MovieHighlight
                            id={movie.id}
                            image={movie.images.snapshot}
                            altText={movie.id}
                            title={movie.title}
                        />
                        : <MovieHighlightSkeleton />
                }
            </section>
        </Suspense>

    );
};