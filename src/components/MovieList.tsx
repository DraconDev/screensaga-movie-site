import useSWR from "swr";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import { Movie } from "../types/Movie";

const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${
	import.meta.env.VITE_API_KEY
}`;

const MovieList = () => {
	async function getMovies(url: string): Promise<Movie[]> {
		const response = await fetch(url);
		const data = await response.json();
		console.log(data.results);
		return data.results;
	}

	// const posterPath = "/vJU3rXSP9hwUuLeq8IpfsJShLOk.jpg";

	// const imageUrl = `${imageBaseUrl}w500${posterPath}`;

	// const { data, error, isLoading } = useSWR(URL, () => getMovies(URL));

	const { data, error, isLoading } = useSWR(URL, getMovies);

	return (
		<>
			<h1>List of Popular Movies</h1>
			{isLoading && <p>Loading movies...</p>}
			{error && <p>Error loading movies. Please try again later.</p>}
			<ul>
				{data?.map((movie) => (
					<li key={movie.id}>{movie.title}</li>
				))}
			</ul>
			<Grid container spacing={2}>
				{data?.map((movie) => (
					<Grid
						item
						xs={12}
						md={2}
						key={movie.id}
						sx={{ backgroundColor: "red", padding: "10px" }}
					>
						<MovieCard {...movie} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default MovieList;
