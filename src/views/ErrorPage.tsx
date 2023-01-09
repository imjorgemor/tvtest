import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "../components/atoms";
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
                <h5>Parece que algo ha ido mal</h5>
                <Text>Te sugerimos recargar el navegador</Text>
                <div>
                    <Button onClick={() => navigate("/")}>Volver</Button>
                </div>
            </MainTemplate>
        </div>
    );
};

export default ErrorPage;