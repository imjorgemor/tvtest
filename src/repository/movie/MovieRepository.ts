import { Meta } from "../../definitions";
import { MovieModel } from "../../models/movie/MovieModel";
import { appFetch } from "../fetch";
import { BASE_URL } from "../endpoints";

export interface MovieDTO {
    data: MovieModel;
}

export interface MovieResponse {
    data: MovieModel | null;
    meta: Meta | any;
}

export default class MovieRepository {
    async getByMovieTitle(movie: string): Promise<MovieResponse> {
        const response = await appFetch<MovieDTO>(`${BASE_URL}/movies/${movie}?classification_id=5&device_identifier=web&locale=es&market_code=es`);
        const data = await response.json();

        let listResponseData: MovieResponse = {
            data: null,
            meta: ""
        };

        if (response.status === 200) {
            listResponseData = {
                data: data.data,
                meta: Meta.SUCCESS
            };
        } else {
            listResponseData = {
                data: null,
                meta: Meta.ERROR
            };
        }
        return listResponseData;
    }
}