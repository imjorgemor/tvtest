import React from 'react';

export const IMDbRating = ({ rating }: { rating: number }) => {
    return (
        <div className='IMDb-wrapper'>
            <div>
                <img src="https://images-3.rakuten.tv/storage/score-site/image/595b7cbc-6723-4d51-9ecf-9eb37512e5ec-imdb-1619161693.png" alt="IMDb logo" />
            </div>
            <span>{rating}</span>
        </div>
    );
};
