import React from 'react';

interface Props {
    filmTitle: string
    artwork: string
}

export const MovieCardItem = ({filmTitle, artwork}: Props) => {
    return (
        <div className='list-item'>
            <div>
                <img src={artwork} alt={filmTitle} />
            </div>
        </div>
    );
};