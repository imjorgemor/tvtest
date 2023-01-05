import React from "react";
import { useRouteError } from "react-router-dom";

type Error = {
    statusText: string,
    message: string
}

export const ErrorPage = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error: Error | any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default ErrorPage;