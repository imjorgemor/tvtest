import React from 'react';
import { Button, MovieTitle } from '../atoms';

interface Props {
    image: string;
    altText: string;
    title: string;
}

export const MovieHighlight = ({ image, altText, title }: Props) => {
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
                        onClick={() => console.log()}
                    />
                </div>
                <div></div>
            </div>

        </div>
    );
};