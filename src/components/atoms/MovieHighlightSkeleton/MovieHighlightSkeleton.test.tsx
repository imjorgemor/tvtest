import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { MovieHighlightSkeleton } from './MovieHighlightSkeleton';

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <MovieHighLightSkeleton /> component', () => {
    test('Should render the movie highlight skeleton', () => {
        render(
            <Provider store={store} >
                    <MovieHighlightSkeleton />
            </Provider>
        );
       expect(screen.queryByTestId("highlight-skeleton")).toBeTruthy();
      
    });
});