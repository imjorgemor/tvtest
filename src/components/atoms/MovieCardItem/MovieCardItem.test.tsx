import React from "react";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { MovieCardItem } from './MovieCardItem';

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <MovieCardItem /> component', () => {
    const movie = {
        filmTitle: "Test title",
        artWork: "",
        id: "Test-title"
    };

    test('Should render the Link router component', () => {
        render(
            <Provider store={store} >
                <BrowserRouter>
                    <MovieCardItem filmTitle={movie.filmTitle} />
                </BrowserRouter>
            </Provider>
        );
       expect(screen.getByRole("link")).toBeTruthy();
    });

    test('Should not render the img card if the data is not loaded', () => {
        render(
            <Provider store={store} >
                <BrowserRouter>
                    <MovieCardItem filmTitle={movie.filmTitle} />
                </BrowserRouter>
            </Provider>
        );
       expect(screen.queryByRole("img")).not.toBeTruthy();
    });

    test('Should render the img card when data is loaded', async() => {
        render(
            <Provider store={store} >
                <BrowserRouter>
                    <MovieCardItem filmTitle={movie.filmTitle} />
                </BrowserRouter>
            </Provider>
        );
       waitFor(()=> expect(screen.queryByRole("img")).not.toBeTruthy());
      
    });
});