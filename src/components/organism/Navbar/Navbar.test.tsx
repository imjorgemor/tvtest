import React from "react";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { Navbar } from './Navbar';

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <Navbar /> component', () => {
    test('Should render a nav html tag', () => {
        render(
            <Provider store={store} >
                <BrowserRouter>
                    <Navbar />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.queryByTestId("tv-navbar")?.tagName).toBe("NAV");
    });
});