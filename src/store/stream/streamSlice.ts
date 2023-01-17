import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieModel } from '../../models/movie';

type InitialState = {
    streamLoaded: boolean,
    content: MovieModel | null,
    playerConfiguration: PlayerConf | null,
}

type PlayerConf = {
    playing: 'playing' |  null
    pause: 'pause' | null
    buffering: 'buffering' | null
}


const initialState: InitialState = {
    streamLoaded: false,
    content: null,
    playerConfiguration: {
        playing: null,
        pause: null,
        buffering: null
    }
};

export const stream = createSlice({
    name: 'streamContent',
    initialState,
    reducers: {
        setStreamLoaded: (state, action: PayloadAction<boolean>) => {
            state.streamLoaded = action.payload;
        },
        setStreamContent: (state, action: PayloadAction<MovieModel | null>) => {
            state.content = action.payload;
        },
        setPlay: (state) => {
            if (state.playerConfiguration){
                state.playerConfiguration= {...state.playerConfiguration, playing: "playing", pause: null };
            } 
        },
        setPause: (state) => {
            if (state.playerConfiguration){
                state.playerConfiguration= {...state.playerConfiguration, playing: null, pause:"pause" };
            } 
        },
        setBuffering: (state) => {
            if (state.playerConfiguration){
                state.playerConfiguration= {...state.playerConfiguration, buffering: "buffering"};
            } 
        },
        resetPlayerConfiguration: (state) => {
            state.playerConfiguration = null;
        }

    }
});

export default stream.reducer;
export const { setStreamLoaded, setStreamContent, resetPlayerConfiguration, setPlay, setPause, setBuffering } = stream.actions;