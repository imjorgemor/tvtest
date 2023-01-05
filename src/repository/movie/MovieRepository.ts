import { appFetch } from "../fetch";

//const BASE_URL = "https://gizmo.rakuten.tv/v3/";
const BASE_URL = "https://gizmo.rakuten.tv/v3/movies/matrix?classification_id=5&device_identifier=web&locale=es&market_code=es";

interface MovieDTO {
    name: string
}

export default class MovieRepository {

    async getByCategory(movie?: string): Promise<MovieDTO> {
        let data: MovieDTO | "ERROR";
        try {
            const response = await appFetch<MovieDTO>(BASE_URL);
            data = await response.json();

        } catch {
            data = "ERROR";
        }
        return data as MovieDTO;
    }
}