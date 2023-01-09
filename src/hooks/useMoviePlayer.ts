import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player, PlayerAPI } from 'bitmovin-player';
import { useAppDispatch, useAppSelector } from './reducerHooks';
import { setPlayerConfiguration, setStreamContent, setStreamLoaded } from '../store/stream';

export const useMoviePlayer = () => {
    const [player, setPlayer] = useState<PlayerAPI | null>(null);
    const streamSlice = useAppSelector(state => state.streamContent);
    const dispatch = useAppDispatch();
    const { content } = streamSlice;
    const navigate = useNavigate();

    //bitmovin config could not detect eventually env variables, https://community.bitmovin.com/t/using-valid-player-key-throwing-setup-license-error-when-application-is-hosted/1085/7
    //if the player gives an error on license plese notify me at jorge-mor@outlook.es as I am using a free license tier and could give some error license after too many renders
    const playerConfig = {
        key: 'D04DD48D-BE6C-4C39-A937-D625968034C4',
        ui: false,
        playback: {
            autoplay: true,
            muted: true
        },
    };

    const playerSource = {
        dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: content?.images.snapshot,
    };

    const playerDiv = useRef(null);

    const setupPlayer = () => {
        if (playerDiv.current) {
            const playerInstance = new Player(playerDiv.current, playerConfig);
            playerInstance.load(playerSource).then(() => {
                setPlayer(playerInstance);
                dispatch(setPlayerConfiguration({ library: 'bitmovin', drmType: "" }));
                dispatch(setStreamLoaded(true));
            }, () => {
                navigate('/not_found/');
            });
        }
    };

    const destroyPlayer = () => {
        if (player != null) {
            player.destroy();
            setPlayer(null);
            //when destroy player return redux state to null
            dispatch(setStreamLoaded(false));
            dispatch(setPlayerConfiguration(null));
            dispatch(setStreamContent(null));
        }
    };

    useEffect(() => {
        setupPlayer();
        return () => {
            destroyPlayer();
        };
    }, []);

    return { playerDiv, destroyPlayer };
};
