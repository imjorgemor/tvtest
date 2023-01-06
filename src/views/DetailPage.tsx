import React from 'react';
import { MoviePreviewCard } from '../components/organism';
import { MovieTemplate } from '../components/templates';



export const DetailPage = () => {
    return (
        <div>
            <MovieTemplate>
                <MoviePreviewCard />
            </MovieTemplate>
        </div>

    );
};

export default DetailPage;