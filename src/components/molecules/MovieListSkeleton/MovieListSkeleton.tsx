import { MovieCardItem } from '../../atoms';

export const MovieListSkeleton = () => {
    const skeletonsToRender = Array.from(Array(9).keys());
    return (
        <>
            {
                skeletonsToRender.map((id) => (
                    <MovieCardItem
                        key={id}
                    />
                ))
            }
        </>
    );
};

