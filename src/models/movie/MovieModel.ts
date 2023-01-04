export interface MovieModel {
    id: string,
    title: string,
    plot: string,
    year: number,
    duration: number,
    images: {
        artWork: string,
        snapshot: string,
    },
    scores: Score[]
}

export interface Score {
    score: number
}