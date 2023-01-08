import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { MovieModel } from '../../models/movie';
import { setStreamContent } from '../../store/stream';
import { Button, IMDbRating, MovieTitle, Text } from '../atoms';

interface Props {
    movie: MovieModel;
}

export const MovieHighlight = ({ movie }: Props) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        dispatch(setStreamContent(movie));
        navigate(`/player/movies/stream/${movie.id}`);
    };

    return (
        <div className='movie-highlight'>
            <div style={{ width: "100%" }}>
                <div className='highlight-filter'></div>
                <img src={movie.images.snapshot} alt={movie.title} />
                <div className='highlight-title'>
                    <MovieTitle>{movie.title}</MovieTitle>
                </div>
            </div>
            <div className='highlight-body'>
                <div className='highlight-button-wrapper'>
                    <Button onClick={() => handleClick()}>Ver trailer gratis con anuncios</Button>
                </div>

                <div className='highlight-details'>
                    <div className='highlight-label'>
                        <IMDbRating rating={movie.scores[0].score} />
                        <Text bold tone='neutral-200'>{movie.year}</Text>
                        <Text bold tone='neutral-200'>{`${movie.duration}min`}</Text>
                    </div>
                    <Text tone='neutral-300' size='md'>{movie.plot}</Text>
                </div>
            </div>
        </div>
    );
};