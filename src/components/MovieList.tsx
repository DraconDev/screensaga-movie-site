import useSWR from "swr";
import { Box, Grid, Typography } from "@mui/material";
import MovieCard from "./MovieCard";
import { POPULAR_URL, getMovies } from "../utils/movieUtils";

const MovieList = () => {
	const { data, error, isLoading } = useSWR(POPULAR_URL, getMovies);

	// const { data, error, isLoading } = useSWR(POPULAR_URL, getMovies);

	// const top10InGenres = GENRES.map((genre) => {
	// 	return getMoviesByGenre(GENRE_URL + genre);
	// });
	// async function getGenres() {
	// 	const { data, error, isLoading } = await useSWR(
	// 		GENRE_URL + "action",
	// 		getMovies
	// 	);
	// 	console.log(data, "test");
	// 	return data;
	// }
	// const genreMovies = getGenres();
	// console.log(genreMovies);

	return (
		<Box px={{ py: 6 }}>
			<Typography
				variant="h3"
				sx={{ textAlign: "left", fontWeight: 400, mb: 1 }}
			>
				Trending
			</Typography>
			{isLoading && <p>Loading movies...</p>}
			{error && <p>Error loading movies. Please try again later.</p>}
			<Grid container spacing={0}>
				{data?.map((movie) => (
					<Grid
						item
						xs={4}
						md={2.4}
						key={movie.id}
						p={0.5}
						sx={{ backgroundColor: "black" }}
					>
						<MovieCard {...movie} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default MovieList;
