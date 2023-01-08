import React from 'react';
import { ListItemModel } from '../../models/list/ListModel';
import { MovieCardItem } from '../atoms';

interface Props {
    movieList: ListItemModel[];
}

const MovieList = ({ movieList }: Props) => {
    return (
        <>
            {
                movieList.map((film: ListItemModel) => (
                    <MovieCardItem
                        key={film.id}
                        id={film.id}
                        filmTitle={film.title}
                        artwork={film.images.artwork}
                    />
                ))

            }
        </>
    );
};

export default MovieList;