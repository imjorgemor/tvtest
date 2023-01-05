import { RepositoryFactory, Repositories } from "../factory";

export const movieService = () => {
    return RepositoryFactory(Repositories.movie);
};
