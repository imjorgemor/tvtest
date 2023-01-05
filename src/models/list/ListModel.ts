export interface ListModel {
    category: string,
    content_type: string,
    id: string,
    name: string,
    contents: {
        data: ListItemModel[],
        meta: MetaListModel
    }
}

export interface ListItemModel {
    id: string,
    title: string,
    images: {
        artwork: string,
        snapshot: string
    }
}

export interface MetaListModel {
    pagination: {
        count: number,
        per_page: number,
        total_pages: number
    }
}