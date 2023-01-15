import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { MovieSlider } from './MovieSlider';
import { filmSections } from '../../../definitions/filmSections';

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

const mock = () => ({
    observe: jest.fn(),
    disconnect: jest.fn()
});
window.IntersectionObserver = jest.fn().mockImplementation(mock);

describe('Test in <MovieSlider /> component', () => {
    const filmTestSection = filmSections.bestSelection;

    test('Should not render any image from the list when loading (only the underlaying skeleton)', () => {
        render(
            <Provider store={store} >
                <BrowserRouter>
                    <MovieSlider section={filmTestSection} />
                </BrowserRouter>
            </Provider>
        );
        expect(screen.queryByRole("img")).not.toBeTruthy();
    });

    test('Should render image from the list when loading', async () => {

        render(
            <Provider store={store} >
                <BrowserRouter>
                    <MovieSlider section={filmTestSection} />
                </BrowserRouter>
            </Provider>
        );
        waitFor(() => expect(screen.queryByRole("img")).not.toBeTruthy());
    });
});