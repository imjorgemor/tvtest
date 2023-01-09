import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { TitleSkeleton } from './TitleSkeleton';

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <TitleSkeleton /> component', () => {
    test('Should render the movie title skeleton', () => {
        render(
            <Provider store={store} >
                    <TitleSkeleton />
            </Provider>
        );
       expect(screen.queryByTestId("title-skeleton")).toBeTruthy();
      
    });
});