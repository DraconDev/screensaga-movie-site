import { Grid, Card } from "@mui/material";
import React from "react";
import MovieCard from "./MovieCard";

type Props = {};

const MovieDisplay = (props: Props) => {
	return (
		<Grid container spacing={2}>
			<MovieCard></MovieCard>
		</Grid>
	);
};

export default MovieDisplay;
