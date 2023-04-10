import React from "react";
import useSWR from "swr";

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
	import.meta.env.VITE_API_KEY
}`;

type Movie = {
	id: number;
	title: string;
	[key: string]: any;
};

const MovieList = () => {
	async function getMovies(url: string): Promise<Movie[]> {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.results);
		return data.results;
	}

	const imageBaseUrl = "https://image.tmdb.org/t/p/";
	// const posterPath = "/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg";

	// const imageUrl = `${imageBaseUrl}w500${posterPath}`;

	// const { data, error, isLoading } = useSWR(URL, () => getMovies(URL));

	const { data, error, isLoading } = useSWR(URL, getMovies);

	return (
		<div>
			{" "}
			<h1>List of Popular Movies</h1>
			{isLoading && <p>Loading movies...</p>}
			{error && <p>Error loading movies. Please try again later.</p>}
			<ul>
				{data?.map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
		</div>
	);
};

export default MovieList;
