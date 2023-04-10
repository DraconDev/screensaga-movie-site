import {
	Grid,
	Card,
	Button,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { Movie } from "../types/Movie";

const imageBaseUrl = "https://image.tmdb.org/t/p/";
const imageSize = "w500";

const MovieCard = ({ title, poster_path }: Movie) => {
	return (
		<Card variant="outlined">
			<CardMedia
				component="img"
				alt={title}
				height="300"
				image={`${imageBaseUrl}${imageSize}${[poster_path]}`}
			/>
		</Card>
	);
};

export default MovieCard;
