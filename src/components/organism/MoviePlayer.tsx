import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Player, PlayerAPI } from 'bitmovin-player';
import { UIFactory } from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setStreamLoaded, setPlayerConfiguration, setStreamContent } from '../../store/stream';


export const MoviePlayer = () => {
    const [player, setPlayer] = useState<PlayerAPI | null>(null);
    const streamSlice = useAppSelector(state => state.streamContent);
    const dispatch = useAppDispatch();
    const { content } = streamSlice;

    const playerConfig = {
        key: "C5A5967D-CF87-4EF1-BC67-D9EAE1734BA6",
        ui: false,
        cast: {
            enable: true
        }
    };

    const playerSource = {
        dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
        hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        poster: content?.images.snapshot,
    };

    const playerDiv = useRef(null);

    useEffect(() => {
        const setupPlayer = () => {
            if (playerDiv.current) {
                const playerInstance = new Player(playerDiv.current, playerConfig);
                UIFactory.buildDefaultUI(playerInstance);
                playerInstance.load(playerSource).then(() => {
                    setPlayer(playerInstance);
                    setPlayerConfiguration({ library: 'bitmovin', drmType: "" });
                    dispatch(setStreamLoaded(true));

                }, () => {
                    //redirect error page
                    console.log('Error while loading source');
                });
            }
        };

        setupPlayer();

        return () => {
            function destroyPlayer() {
                if (player != null) {
                    player.destroy();
                    setPlayer(null);
                    dispatch(setStreamLoaded(false));
                    dispatch(setPlayerConfiguration(null));
                    dispatch(setStreamContent(null));
                }
            }
            destroyPlayer();
        };
    }, []);

    return (
        <Suspense>
            <div style={{position:'relative'}}>
                <div style={{ position: "absolute", top: 0, zIndex: 999, width: '100px', height: "100px", background: "white"}}>
                    salir
                </div>
                <div
                    id='player'
                    ref={playerDiv}
                    style={{ zIndex: 600, height: "100vh" }}
                />
            </div>
        </Suspense>
    );
};

export default MoviePlayer;