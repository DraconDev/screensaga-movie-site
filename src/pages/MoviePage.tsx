import React from "react";
import useSWR from "swr";
import { getMovieById } from "../utils/movieUtils";
import MainLayout from "../layout/MainLayout";
import { Box, Typography } from "@mui/material";
type Props = {
	id: string | undefined;
};

export const imageBaseUrl = "https://image.tmdb.org/t/p/original";

const MoviePage = ({ id }: Props) => {
	console.log(id, "id");
	const { data, error, isLoading } = useSWR(id, getMovieById);

	console.log(data, "data");

	return (
		<MainLayout>
			{isLoading && <p>Loading movies...</p>}
			{error && <p>Error loading movies. Please try again later.</p>}
			{data && (
				<Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
							p: 2,
							alignItems: "end",
						}}
					>
						<Typography variant="h3">{data.title}</Typography>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								placeItems: "end",
							}}
						>
							<Typography variant="body1" color="initial">
								Rating: {data.vote_average.toFixed(1)}
							</Typography>
							<Typography variant="subtitle2" color="initial">
								Votes: {data.vote_count}
							</Typography>
						</Box>
					</Box>
					<Box>
						<img
							src={`${imageBaseUrl}${data.backdrop_path}`}
							alt=""
							width="100%"
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "end",
							alignItems: "center",
						}}
					>
						<Typography variant="h5" color="initial">
							{data.release_date}
						</Typography>
					</Box>
					<Box sx={{ mt: 3, p: 3, display: "flex" }}>
						<img
							src={`${imageBaseUrl}${data.poster_path}`}
							alt=""
							width="30%"
						/>
						<Typography variant="h5" color="initial" sx={{ p: 2 }}>
							{data.overview}
						</Typography>
					</Box>
				</Box>
			)}
		</MainLayout>
	);
};

export default MoviePage;
