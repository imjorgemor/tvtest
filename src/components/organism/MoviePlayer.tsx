import React, { Suspense } from 'react';
import { useAppSelector, useMoviePlayer } from '../../hooks';
import { ArrowBack } from '../../assets/icons';
import { MovieTitle, Text } from '../atoms';


export const MoviePlayer = () => {
    const { playerDiv, handleClickBack } = useMoviePlayer();
    const streamSlice = useAppSelector(state => state.streamContent);
    const { content } = streamSlice;

    return (
        <Suspense>
            <div
                className='movie-player'
                id='player'
                ref={playerDiv}
            >
                <div>

                    <div className='movie-content-wrapper'>
                        <div onClick={() => handleClickBack()}>
                            <ArrowBack />
                        </div>
                        {
                            content
                                ? <div>
                                    <Text tone='neutral-200' size='md'>Viendo</Text>
                                    <MovieTitle>{content?.title ? content?.title : ""}</MovieTitle>
                                </div>
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default MoviePlayer;