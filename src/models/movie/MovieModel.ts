import { ImageModel } from "../images";

export interface MovieModel {
    id: string;
    title: string;
    plot: string;
    year: number;
    duration: number;
    images: ImageModel
    scores: Score[];
}

export interface Score {
    score: number;
}