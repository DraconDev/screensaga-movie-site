import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import MovieList from "../components/MovieList";
import MainLayout from "../layout/MainLayout";
import Swiper from "../components/Swiper";
import { getMovieById } from "../utils/movieUtils";


function App() {
	// const test = getMovieById("373223").then((data) => data);
	// console.log(test, "ryd");


	// console.log(data, "ryd");

	return (
		<MainLayout>
			<Swiper />
			<MovieList />
		</MainLayout>
	);
}

export default App;
