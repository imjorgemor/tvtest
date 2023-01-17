import { Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useMoviePlayer } from '../../../hooks';
import { ArrowBack } from '../../../assets/icons';
import { MovieTitle, Text } from '../../atoms';
import { ReactShakaPlayer } from "@mkhuda/react-shaka-player";
import "@mkhuda/react-shaka-player/dist/ui.css";


export const MoviePlayer = () => {
    const { content } = useAppSelector(state => state.streamContent);
    const {setMainPlayer, playerSource, config, uiConfig, onPlay, onPause, onBuffering, onLoad, handleClickBack } = useMoviePlayer();
    const navigate = useNavigate();

    return (
        <Suspense>
            <div
                className='movie-player'
                id='player'
            >
                <ReactShakaPlayer
                    playerClassName="player-class-name"
                    autoPlay={true}
                    src={playerSource.dash}
                    config={config}
                    uiConfig={uiConfig}
                    onLoad={(player) => {
                        setMainPlayer(player);
                        onLoad();
                    }}
                    onPlay={onPlay}
                    onPause={onPause}
                    onBuffering={onBuffering}
                    onPlayerError={() => navigate('/not_found/')}
                />

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
        </Suspense>
    );
};

export default MoviePlayer;