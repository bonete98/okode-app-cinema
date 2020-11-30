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
// {
//     original_title: "e",
//     poster_path: "e",
//     video: false,
//     vote_average: 23,
//     vote_count: 30,
//     release_date: new Date(2, 3, 4),
//     title: "El padrino",
//     popularity: 50,
//     adult: false,
//     id: 23456,
//     overview: "ewfwegfvwe",
//     genre_ids: [],
//     backdrop_path: "e",
//     original_language: "english"
//   };
export interface FilmResolved {
    film: IFilm;
    error?:any;
}
export interface IFilmDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: any[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: any[];
    production_countries:any[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: ILanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
export interface ILanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}