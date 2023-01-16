import { ListItemModel } from '../../../models/list/ListModel';
import { MovieCardItem } from '../../atoms';

interface Props {
    movieList: ListItemModel[];
}

const MovieList = ({ movieList }: Props) => {
    return (
        <>
            {
                movieList.map((film: ListItemModel, index) => (
                    <MovieCardItem
                        key={film.id + index}
                        id={film.id}
                        filmTitle={film.title}
                        artwork={film.images.artwork}
                    />
                ))

            }
        </>
    );
};

export default MovieList;