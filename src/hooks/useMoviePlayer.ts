import { useEffect, useRef, useState } from 'react';
import { Player, PlayerAPI } from 'bitmovin-player';
import { useAppDispatch, useAppSelector } from './reducerHooks';
import { setPlayerConfiguration, setStreamContent, setStreamLoaded } from '../store/stream';

export const useMoviePlayer = () => {

    const [player, setPlayer] = useState<PlayerAPI | null>(null);
    const streamSlice = useAppSelector(state => state.streamContent);
    const dispatch = useAppDispatch();
    const { content } = streamSlice;


    const BITMOVIN_KEY = process.env.REACT_APP_BITMOVIN_KEY ?process.env.REACT_APP_BITMOVIN_KEY: "";

    const playerConfig = {
        key: BITMOVIN_KEY,
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
                //redirect error page
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

    return { playerDiv };
};
