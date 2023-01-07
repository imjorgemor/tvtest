import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    configuration: string,
    errorsList: number
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        configuration: "Rakuten TV test by Jorge Mor", //this data is not mutable
        errorsList: 0 //we count the fetch errors on lists. In case we may have several errors we will redirect the user to the something wrong page
    },
    reducers: {
        setErrorsList: (state) => {
            state.errorsList++;
        }
    } 
});

export default homeSlice.reducer;
export const {setErrorsList} = homeSlice.actions;