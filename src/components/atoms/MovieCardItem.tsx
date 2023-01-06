import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    filmTitle: string
    artwork: string
    id: string
}

export const MovieCardItem = ({ filmTitle = "", artwork= "", id="" }: Props) => {
    return (
        <div className='card-item'>
            <Link to={`/movies/${id}`}>
                <div className='card-container'>
                    <div className='card-skeleton'>
                        { 
                            artwork.length
                                ? <img src={artwork} alt={filmTitle} />
                                : null
                        }
                    </div>
                </div>
            </Link>
        </div>
    );
};