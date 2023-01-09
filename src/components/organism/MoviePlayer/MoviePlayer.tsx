import React, { Suspense } from 'react';
import { useAppSelector, useAppDispatch, useMoviePlayer } from '../../../hooks';
import { ArrowBack } from '../../../assets/icons';
import { MovieTitle, Text } from '../../atoms';
import { setPlayerConfiguration, setStreamContent, setStreamLoaded } from '../../../store/stream';
import { useNavigate } from 'react-router-dom';


export const MoviePlayer = () => {
    const { playerDiv } = useMoviePlayer();
    const streamSlice = useAppSelector(state => state.streamContent);
    const { content } = streamSlice;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleClickBack = () => {
        dispatch(setStreamLoaded(false));
        dispatch(setPlayerConfiguration(null));
        dispatch(setStreamContent(null));
        navigate(-1);
    };

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