import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, MovieTitle } from '../atoms';

interface Props {
    image: string;
    altText: string;
    title: string;
    id: string
}

export const MovieHighlight = ({ image, altText, title, id }: Props) => {
    const navigate = useNavigate();
    return (
        <div className='movie-highlight'>
            <div className='highlight-filter'></div>
            <img src={image} alt={altText} />
            <div className='highlight-title'>
                <MovieTitle title={title} />
            </div>
            <div className='highlight-body'>
                <div>
                    <Button
                        text='Ver trailer gratis con anuncios'
                        onClick={() => navigate(`/player/movies/stream/${id}`)}
                    />
                </div>
                <div></div>
            </div>

        </div>
    );
};