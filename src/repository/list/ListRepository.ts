import { ListModel } from "../../models/list/ListModel";
import { appFetch } from "../fetch";
import { BASE_URL } from "../endpoints";
import { Meta } from "../../definitions";

export interface ListCategoryDTO {
    data: ListModel;
}

export interface ListCategoryResponse {
    data: ListModel | null;
    meta: Meta | any;
}

export default class ListRepository {
    async getByCategory(category?: string): Promise<ListCategoryResponse> {
        let listResponseData: ListCategoryResponse = {
            data: null,
            meta: ""
        };

        try {
            const response = await appFetch<ListCategoryDTO>(`${BASE_URL}/lists/${category}?classification_id=5&device_identifier=web&locale=es&market_code=es`);
            const data = await response.json();
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
        } catch {
            listResponseData = {
                data: null,
                meta: Meta.ERROR
            };
        }
        return listResponseData;
    }
}