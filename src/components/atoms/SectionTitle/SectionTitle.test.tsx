import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { SectionTitle } from "./SectionTitle";

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <SectionTitle /> component', () => {
    test('Should render the section title passed as children', () => {
        const title = "This is a test section title";
        render(
            <Provider store={store} >
                <SectionTitle>{title}</SectionTitle>
            </Provider>
        );
        expect(screen.getByText("This is a test section title")).toBeTruthy();
    });
});