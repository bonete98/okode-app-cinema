export interface IFilm {
    original_title: string;
    poster_path: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    release_date: Date;
    title: string;
    popularity: number;
    adult: boolean;
    id: number;
    overview: string;
    genre_ids: number[];
    backdrop_path: string;
    original_language: string;
}