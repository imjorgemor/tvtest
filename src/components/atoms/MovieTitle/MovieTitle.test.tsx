import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { MovieTitle } from "./MovieTitle";

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <MovieTitle /> component', () => {
    test('Should render the title passed as children', () => {
        const title = "This is a test title";
        render(
            <Provider store={store} >
                <MovieTitle>{title}</MovieTitle>
            </Provider>
        );
        expect(screen.getByText("This is a test title")).toBeTruthy();
    });
});