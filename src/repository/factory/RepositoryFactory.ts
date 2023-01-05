import ListRepository from "../list/ListRepository";
import MovieRepository from "../movie/MovieRepository";

export enum Repositories {
    list= 'list',
    movie= 'movie'
}

const repositories= {
    list: new ListRepository(),
    movie: new MovieRepository()
};

export function RepositoryFactory<T extends keyof typeof repositories>(repository: T) {
    return repositories[repository];
}

