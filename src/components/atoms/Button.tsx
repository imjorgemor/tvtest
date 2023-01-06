import React from 'react';

interface Props {
    text: string;
    onClick: () => void
    dataTestId?: string;

}

export const Button = ({ text, dataTestId = "", onClick }: Props) => {
    return (
        <button
            className='app-button'
            data-testid={dataTestId}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

export default Button;