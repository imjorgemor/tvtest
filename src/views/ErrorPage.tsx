import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "../components/atoms";
import { MainTemplate } from "../components/templates";

type Error = {
    statusText: string,
    message: string
}

export const ErrorPage = () => {
    const navigate = useNavigate();


    return (
        <div id="error-page">
            <MainTemplate>
                <h1>Vaya!</h1>
                <h5>Parece que no encontramos lo que estás buscando</h5>
                <div>
                    <Button onClick={() => navigate(-1)}>Volver</Button>
                </div>
            </MainTemplate>
        </div>
    );
};

export default ErrorPage;