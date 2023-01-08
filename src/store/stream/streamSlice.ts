import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieModel } from '../../models/movie';

type InitialState = {
    streamLoaded: boolean
    content: MovieModel | null
    playerConfiguration: Player| null
}

type Player = {
    library: string
    drmType: string
}

const initialState: InitialState = {
    streamLoaded: false,
    content: null,
    playerConfiguration: null
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
        setPlayerConfiguration: (state, action: PayloadAction<Player | null>) => {
            state.playerConfiguration = action.payload;
        }
    }
});

export default stream.reducer;
export const { setStreamLoaded, setStreamContent, setPlayerConfiguration } = stream.actions;