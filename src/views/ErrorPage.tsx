import React from "react";
import { useRouteError } from "react-router-dom";
import { MainTemplate } from "../components/templates";

type Error = {
    statusText: string,
    message: string
}

export const ErrorPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error: Error | any = useRouteError();

    return (
        <div id="error-page">
            <MainTemplate>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </MainTemplate>
        </div>
    );
};

export default ErrorPage;