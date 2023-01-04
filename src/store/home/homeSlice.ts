import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        ads: {},
        content: {},
        configuration: {}
    },
    reducers: {
        setConf: (state, action) => {
            console.log(action);
        }
    } 
});

export const {setConf} = homeSlice.actions;