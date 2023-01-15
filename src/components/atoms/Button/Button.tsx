interface Props {
    children: string;
    onClick: () => void;
    dataTestId?: string;

}

export const Button = ({ children, dataTestId = "", onClick }: Props) => {
    return (
        <button
            className='app-button'
            data-testid={dataTestId}
            onClick={onClick}
        >
            <span>{children}</span>
        </button>
    );
};

export default Button;