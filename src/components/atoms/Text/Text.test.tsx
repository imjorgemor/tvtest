import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { Text } from "./Text";

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <Text /> component', () => {
    test('Should render the text passed as children', () => {
        const title = "This is a test text";
        render(
            <Provider store={store} >
                <Text>{title}</Text>
            </Provider>
        );
        expect(screen.getByText("This is a test text")).toBeTruthy();
    });

    test('Should render the tone neutral-100 passed as props', () => {
        const title = "This is a test text";
        const tone = 'neutral-100';
        render(
            <Provider store={store} >
                <Text tone={tone}>{title}</Text>
            </Provider>
        );
        expect(screen.queryByTestId("app-text")?.className).toContain(tone);
    });

    test('Should render the size sm passed as props', () => {
        const title = "This is a test text";
        const size = 'sm';
        render(
            <Provider store={store} >
                <Text size={size}>{title}</Text>
            </Provider>
        );
        expect(screen.queryByTestId("app-text")?.className).toContain(size);
    });

    test('Should render the text with bold style when passed as props', () => {
        const title = "This is a test text";
        render(
            <Provider store={store} >
                <Text bold>{title}</Text>
            </Provider>
        );
        expect(screen.queryByTestId("app-text")?.className).toContain("bold");
    });
});