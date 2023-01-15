import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { IMDbRating } from "./IMDbRating";

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <IMBdRating /> component', () => {
    const rating = 5.1;

    test('Should render the rating', () => {
        render(
            <Provider store={store} >
                <IMDbRating rating={rating}/>
            </Provider>
        );
        expect(screen.getByText(5.1)).toBeTruthy();
    });

    test('Must show the IMBd logo', () => {
        render(
            <Provider store={store} >
                <IMDbRating rating={rating}/>
            </Provider>
        );
        expect(screen.getByRole('img')).toBeTruthy();
    });
});