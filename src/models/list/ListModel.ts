import { ImageModel } from "../images";

export interface ListModel {
    category: string;
    content_type: string;
    id: string;
    name: string;
    contents: {
        data: ListItemModel[];
    }
}

export interface ListItemModel {
    id: string;
    title: string;
    images: ImageModel
}

export interface MetaListModel {
    pagination: {
        count: number;
        per_page: number;
        total_pages: number;
    }
}