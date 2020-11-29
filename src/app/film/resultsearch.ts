import { IFilm } from './film';
export interface IResultSearch {
    page: number;
    total_results: number;
    results: IFilm[];
    total_pages: number;
}
