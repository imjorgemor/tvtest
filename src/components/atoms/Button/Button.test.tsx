import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { home } from "../../../store/home/homeSlice";
import { stream } from "../../../store/stream/streamSlice";
import { Button } from "./Button";

const store = configureStore({
    reducer: {
        home: home.reducer,
        stream: stream.reducer
    }
});

describe('Test in <Button /> component', () => {
    test('Should render the children', () => {
        const buttonText = "This is a test button";
        render(
            <Provider store={store} >
                <Button onClick={() => console.log("this is a test")}>{buttonText}</Button>
            </Provider>
        );
        expect(screen.getByText("This is a test button")).toBeTruthy();
    });
});