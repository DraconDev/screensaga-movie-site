import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import MovieList from "../components/MovieList";
import MainLayout from "../layout/MainLayout";
import Swiper from "../components/Swiper";
import { getMovieById } from "../utils/movieUtils";


function App() {
	return (
		<MainLayout>
			<Swiper />
			<MovieList />
		</MainLayout>
	);
}

export default App;
