interface Props {
    isActive: boolean
}

export const Bullet = ({ isActive }: Props) => {
    return (
        <div className={`bullet-slider ${isActive ? "bullet-slider--active" : ""}`} />
    );
};