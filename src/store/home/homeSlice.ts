import { createSlice} from '@reduxjs/toolkit';

type InitialState = {
    configuration: string,
    errorsList: number
}

const initialState: InitialState = {
    configuration: "Rakuten TV test by Jorge Mor", //this data is not mutable, just for the purposes of this test
    errorsList: 0 //we count the fetch errors on lists. In case we may have several errors we will redirect the user to the something wrong page
};

export const home = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setErrorsList: (state) => {
            state.errorsList++;
        }
    } 
});

export default home.reducer;
export const {setErrorsList} = home.actions;