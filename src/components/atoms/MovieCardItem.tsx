import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    filmTitle?: string
    artwork?: string
}

export const MovieCardItem = ({ filmTitle = "", artwork= "" }: Props) => {
    return (
        <div className='card-item'>
            <Link to={`/movies/${filmTitle}`}>
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