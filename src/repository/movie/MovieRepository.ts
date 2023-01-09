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
        //here is where the magic happens
        let movieResponseData: MovieResponse = {
            data: null,
            meta: ""
        };

        try {
            const response = await appFetch<MovieDTO>(`${BASE_URL}/movies/${movie}?classification_id=5&device_identifier=web&locale=es&market_code=es`);
            const data = await response.json();
            
            if (response.status === 200) {
                movieResponseData = {
                    data: data.data,
                    meta: Meta.SUCCESS
                };
            } else {
                movieResponseData = {
                    data: null,
                    meta: Meta.ERROR
                };
            }
        } catch (error){
            movieResponseData = {
                data: null,
                meta: Meta.ERROR
            };
        }
        return movieResponseData;
    }
}