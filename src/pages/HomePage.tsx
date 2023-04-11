import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import MovieList from "../components/MovieList";
import MainLayout from "../layout/MainLayout";
import Swiper from "../components/Swiper";

const theme = createTheme({
	palette: {
		primary: {
			main: "#2C3639",
		},
		secondary: {
			light: "#3F4E4F",
			main: "#3F4E4F",
		},
		text: {
			primary: "#ffffff", // sets the primary text color to white
			secondary: "#ffffff", // sets the secondary text color to white
		},
		background: {
			default: "rgb(17, 17, 19)", // sets the
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainLayout>
				<Swiper />
				<MovieList />
			</MainLayout>
		</ThemeProvider>
	);
}

export default App;
