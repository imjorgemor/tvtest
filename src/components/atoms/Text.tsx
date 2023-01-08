import React from 'react';

interface Props {
    children: string | number;
    tone?: 'neutral-100' | 'neutral-200' | 'neutral-300' | 'neutral-400' | 'yellow';
    size?: 'sm' | 'md' | 'lg'
    bold?: boolean
}

export const Text = ({ children, tone = 'neutral-100', size= 'sm', bold = false }: Props) => {
    const fontWeight = bold ? "bold" : "";

    return (
        <span
            className={`app-text--${tone} app-text--${size} app-text--${fontWeight}`}
        >{children}</span>
    );
};