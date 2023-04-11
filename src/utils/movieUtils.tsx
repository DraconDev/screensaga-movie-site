import axios from "axios";
import { Movie } from "../types/Movie";
import useSWR from "swr";

export const API_KEY = import.meta.env.VITE_API_KEY;

export const POPULAR_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
	import.meta.env.VITE_API_KEY
}`;

export const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

export async function getMovies(url: string): Promise<Movie[]> {
	const response = await fetch(url);
	const data = await response.json();
	return data.results;
}

export async function getListOfGenres() {
	const response = await fetch(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
	);
	// console.log(response);
	const data = await response.json();
	// console.log(data);
	return data;
}
export const genres = await getListOfGenres();

// export async function getMoviesByGenre(url: string): Promise<Movie[]> {
// 	const response = await fetch(url);
// 	const data = await response.json();
// 	console.log(data.results);
// 	return data.results;
// }

// export async function getMoviesByGenre(genre: string): Promise<Movie[] | void> {
// 	await axios
// 		.get("http://www.omdbapi.com/", {
// 			params: {
// 				apikey: API_KEY,
// 				s: "",
// 				type: "movie",
// 				y: "",
// 				r: "json",
// 				page: 1,
// 				genre: genre,
// 			},
// 		})
// 		.then((response) => {
// 			const movies = response.data;
// 			return movies;
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			return;
// 		});
// }
