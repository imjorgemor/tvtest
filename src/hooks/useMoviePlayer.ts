import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './reducerHooks';
import { resetPlayerConfiguration, setStreamContent, setStreamLoaded, setPlay, setPause, setBuffering } from '../store/stream';

export const useMoviePlayer = () => {
    //I do not use yet the info stored in the state but could be sync with the reducer
    const [mainPlayer, setMainPlayer] = useState({});
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const playerSource = {
        dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    };
    
    const config = {
        manifest: {
            dash: {
                ignoreMinBufferTime: true,
            },
        },
        streaming: {
            lowLatencyMode: true,
            inaccurateManifestTolerance: 0,
            bufferingGoal: 6,
            rebufferingGoal: 1,
        },
    };
    
    const uiConfig = {
        controlPanelElements: ['mute'],
        addBigPlayButton: true,
        
    };
    
    const onPlay = () => {
        dispatch(setPlay());
    };
    
    const onPause = () => {
        dispatch(setPause());
    };
    
    const onBuffering = () => {
        dispatch(setBuffering);
    };
    
    const onLoad = () => {
        dispatch(setStreamLoaded(true));
    };
    
    const handleClickBack = () => {
        dispatch(setStreamLoaded(false));
        dispatch(resetPlayerConfiguration());
        dispatch(setStreamContent(null));
        navigate(-1);
    };
    
    return {setMainPlayer, playerSource, config, uiConfig, onPlay, onPause, onBuffering, onLoad, handleClickBack };
};
